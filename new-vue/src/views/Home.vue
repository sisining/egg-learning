<template slot-scope="scope">
    <div class="home">


        <div>
            <h2>数据：</h2>
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

<!--            <el-table-->
<!--                    :data="allData"-->
<!--                    border-->
<!--                    style="width: 100%">-->
<!--                <el-table-column-->
<!--                        fixed-->
<!--                        prop="id"-->
<!--                        label="#id"-->
<!--                        width="200">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="name"-->
<!--                        label="姓名"-->
<!--                        width="200">-->
<!--                </el-table-column>-->

<!--                <el-table-column-->
<!--                        prop="age"-->
<!--                        label="年龄"-->
<!--                        width="200">-->
<!--                </el-table-column>-->

<!--                <el-table-column-->
<!--                        prop=""-->
<!--                        fixed="right"-->
<!--                        label="操作">-->
<!--                 235463465-->
<!--                </el-table-column>-->
<!--            </el-table>-->


<!--            <div class="block">-->
<!--                <span class="demonstration"></span>-->
<!--                <el-pagination-->
<!--                        @size-change="handleSizeChange"-->
<!--                        @current-change="handleCurrentChange"-->
<!--                        :current-page="currentPage"-->
<!--                        :page-sizes="[5,10,15,20,50,100]"-->
<!--                        :page-size="5"-->
<!--                        layout="total, sizes, prev, pager, next, jumper"-->
<!--                        :total="400">-->
<!--                </el-pagination>-->
<!--            </div>-->
        </div>

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
    </div>
</template>

<script>
    import {deleteOne, getDate, createOne, updateOne, findOne} from "../network";
    import {mapActions} from 'vuex'

    export default {
        name: "Home",
        // props: {},

        data() {
            return {
                allData: [],
                allObj: {
                    id: '',
                    name: '',
                    age: ''
                },

                currentPage: 1
            }
        },
        mounted() {
            this.getDate()

        },

        methods: {
            handleClick(row) {
                console.log(row);
            },

            getDate() {
                getDate().then(res => {
                    console.log(res[0])
                    this.allData = res[0]
                    console.log('56788')
                })

            },

            async addOne() {
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
                console.log(index)
                // console.log(this.allData[index].id)
                // this.allObj.id = this.allData[index].id
                // this.allObj.name = this.allData[index].name
                // this.allObj.age = this.allData[index].age
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
            // 分页
            page() {

            },
            //分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
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
