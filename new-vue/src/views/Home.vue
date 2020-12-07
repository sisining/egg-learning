<template slot-scope="scope">
    <div class="home">

        <h2>添加/更新</h2>
        <div class="container">
            <form :model="allObj">
                <div class="form-group">
                    <label for="exampleInputEmail1">id</label>
                    <input type="text" v-model="allObj.id" class="form-control">

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input type="text" v-model="allObj.name" class="form-control" id="exampleInputEmail1">

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">age</label>
                    <input type="text" v-model="allObj.age" class="form-control" id="exampleInputPassword1">
                </div>

                <button @click="addOne" class="btn btn-primary">添加</button>
                <button @click="updateOne" class="btn btn-primary">更新</button>
            </form>

        </div>

        <h2>数据：</h2>
        <!--        {{allData}}-->
        <!--        <ul v-for="(item,index) in allData">-->
        <!--            <li>{{item}}</li>-->
        <!--            <button @click="deleteOne(index)">删除</button>-->
        <!--        </ul>-->
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#id</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">operation</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in allData">
                <th scope="row">{{item.id}}</th>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>
                    <button type="button" class="btn btn-primary" @click="findOne(index)">更新</button>
                    <button type="button" class="btn btn-danger" @click="deleteOne(index)">删除</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {deleteOne, getDate, createOne, updateOne, findOne} from "../network";
    import {mapActions} from 'vuex'

    export default {
        name: "Home",
        // props: {
        //     allData: {
        //         type: Array,
        //     },
        // },

        data() {
            return {
                allData: [],
                all: [],
                // columns: [
                //     {
                //         title: '#id',
                //         key: 'id'
                //     },
                //     {
                //         title: '姓名',
                //         key: 'name'
                //     }, {
                //         title: '年龄',
                //         key: 'age'
                //     },
                //     {
                //         title: 'Action',
                //         slot: 'action',
                //         width: 150,
                //         align: 'center'
                //     }
                // ]
                allObj: {
                    id: '',
                    name: '',
                    age: ''
                }
            }
        },
        mounted() {
            this.getDate()

        },
        updated() {
            // this.createOne()
            // this.getAll()
        },
        methods: {
            // ...mapActions({
            //     getAllNew: "getAll",
            //     addOneNew: 'addOne',
            //     updateThoseNew: 'updateThose',
            //     deleteThoseNew: 'deleteThose'
            // }),

            // async getAll() {
            //     const res = await this.getAllNew()
            //     console.log(res)
            //     console.log('13123')
            //     if (res.code === 0) {
            //         this.all = res.data
            //     }
            // },
            // async addOne() {
            //     console.log(12465476547)
            //     const res = await this.addOneNew({
            //         name: this.allObj.name,
            //         age: this.allObj.age
            //     })
            //     if (res.code === 0) {
            //         this.allObj.name = '',
            //             this.allObj.age = ''
            //         this.getDate()
            //     }
            // },

            getDate() {
                getDate().then(res => {
                    console.log(res[0])
                    this.allData = res[0]
                    console.log('56788')
                })

            },

            async addOne() {
                // this.addOneNew({
                //     name: this.allObj.name,
                //     age: this.allObj.age
                // })
                // console.log(325235)
                // const name = this.allObj.name;
                // const age = this.allObj.age;
                // createOne(name, age).then(res => {
                //     this.getDate()
                //     console.log(res)
                // })
                const id = this.allObj.id
                const name = this.allObj.name
                const age = this.allObj.age
                const res = await createOne({id, name, age}).then(res => {
                    this.getDate()
                    console.log(res)
                })
                console.log(res)
                console.log(id, name, age)
            },

            //按下标查询更新
            async findOne(index) {
                console.log(this.allData[index].id)
                this.allObj.id = this.allData[index].id
                this.allObj.name = this.allData[index].name
                this.allObj.age = this.allData[index].age
                // const res=await findOne(id).then(res=>{
                //   console.log(res)
                // })
            },

            async updateOne() {
                const id = this.allObj.id
                const name = this.allObj.name
                const age = this.allObj.age
                const res = await updateOne({id, name, age}).then(res => {
                    this.getDate()
                    console.log(res)
                })
                console.log(res)
                console.log(id, name, age)
            },

            async deleteOne(index) {
                console.log(this.allData[index].id)
                const thisId = this.allData[index].id
                await deleteOne(thisId).then(res => {
                    this.getDate()
                })

            },
        }
    }
</script>

<style scoped>

    .home {
        margin-bottom: 100px;
    }

    button {
        margin-left: 3px;
    }
</style>
