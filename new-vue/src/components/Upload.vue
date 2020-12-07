<template>
    <div>
        <form enctype="multipart/form-data">
            title: <input name="title"/> file: <input name="file" type="file"/>
            <button type="submit">Upload</button>
        </form>

<!--        <input type="file" ref="fileid" multiple="multiple">-->
<!--        <button @change="upload">文件上传</button>-->
    </div>
</template>

<script>
    // import axios from 'axios'
    import {uploadOne} from "../network";

    export default {
        name: "Upload",
        methods: {
            async upload() {
                // 获取上传的文件
                let file = this.$refs.fileid.files[0]
                // 创建一个FormData对象
                let formData = new FormData()
                formData.append('file', file)
                await uploadOne(formData).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
