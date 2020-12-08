<template>
    <div>
        file: <input name="file" type="file" ref="fileid" @change="file"/>
        <button type="button" class="btn btn-primary" @click="upload">Upload</button>


        <ul>
            <li v-for="(item,index) in files">{{item}}
                <button type="button" class="btn btn-info" @click="download(index)">下载</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import {uploadOne, download} from "../network";

    export default {
        name: "Upload",
        data() {
            return {
                files: []
            }
        },
        methods: {
            // file(e) {
            //     this.files = e.target.files
            // },
            async upload() {
                // 获取上传的文件
                let files = this.$refs.fileid.files
                // 创建一个FormData对象

                if (files) {
                    let formData = new FormData()
                    for (let i = 0; i < files.length; i++) {
                        let file = files[i]
                        formData.append('file' + i, file)
                    }
                    console.log(files)

                    await uploadOne(formData).then(res => {
                        console.log(res)
                        this.files.push(res.data.filename)
                    })
                }
                console.log(1212)
            },

            async download(index) {
                // console.log(this.files[index])
                const filename = this.files[index]
                await download(filename).then(res => {
                    console.log(8758)
                })
            }
        }
    }
</script>

<style scoped>
    button {
        margin-left: 5px;
    }
</style>
