<template>
    <div>
        <h2>级联选择</h2>
        <div class="select">
            <div class="block">
                <span class="demonstration">省份</span>
                <el-cascader
                        :options="options1"
                        :props="defaultParams1"
                        @change="handleChange1"></el-cascader>
            </div>

            <div class="block">
                <span class="demonstration">城市/区</span>
                <el-cascader
                        :options="options2"
                        :props="defaultParams2"
                        @change="handleChange2"></el-cascader>
            </div>

            <div class="block">
                <span class="demonstration">城区</span>
                <el-cascader
                        :options="options3"
                        :props="defaultParams3"></el-cascader>
            </div>

<!--            <div class="block">-->
<!--                <span class="demonstration">地点</span>-->
<!--                <el-cascader-->
<!--                        :options="options4"-->
<!--                        :props="defaultParams4"></el-cascader>-->
<!--            </div>-->
        </div>

    </div>
</template>

<script>
    import {selectCity, selectDate, selectMore, selectProvince, selectRegion} from "../network";

    export default {
        name: "Select",
        data() {
            return {
                value: [],
                options1: [],
                options2: [],
                options3: [],
                options4: [],
                defaultParams1:
                    {
                        label: 'mc',
                        value: 'zj'
                    },
                defaultParams2:
                    {
                        label: 'mc',
                        value: 'zj'
                    },
                defaultParams3:
                    {
                        label: 'mc',
                        value: 'zj'
                    },
                defaultParams4:
                    {
                        label: 'mc',
                        value: 'zj'
                    },

            }
        },
        mounted() {
            this.selectDate()
            this.selectProvince()

        },
        methods: {
            selectDate() {
                selectDate().then(res => {
                    // this.value = res[0]
                    // this.options = res[0]
                    console.log(res[0])

                })
            },

            //省
            selectProvince() {
                selectProvince().then(res => {
                    // this.value = res[0]
                    // this.options = res[0]
                    // let province=[]
                    // for(let i of res[0]){
                    //   // console.log(i.mc)
                    //   province.push(i.mc)
                    // }
                    // this.options.value=province
                    // this.options.label=province
                    // console.log(province)
                    this.options1 = res[0]
                    // console.log(res[0])

                })
            },

            async handleChange1(value) {
                //市
                const fjzj = parseInt(value)
                await selectCity(fjzj).then(res => {
                    this.options2 = res
                    // console.log(res)

                })
                console.log(value);
            },

            async handleChange2(value) {
                //区
                const fjzj = parseInt(value)
                await selectCity(fjzj).then(res => {
                    this.options3 = res
                    // console.log(res)

                })
                console.log(value);
            },

            // async handleChange3(value) {
            //     //区
            //     const ssdy = parseInt(value)
            //     await selectMore(ssdy).then(res => {
            //         this.options4 = res
            //         console.log(this.$message)
            //
            //     })
            //     console.log(value);
            // },

        },

    }
</script>

<style scoped>
    .select {
        display: flex;
        justify-content: space-around;
    }
</style>
