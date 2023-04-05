<template>
    <h1>Upload some images</h1>
    <button @click="openUploadWidget()">UPload</button>
</template>

<script >
export default {
    methods: {
        openUploadWidget() {

            const widget = window.cloudinary.createUploadWidget({
                cloud_name: 'dzo1tqhjz', upload_preset: 'l3gmhpji'
            }, (err, result) => {
                if(!err && result && result.event === "success"){
                    console.log("done upload ... ", result.info)
                }
            }

            )
            widget.open()
        }
    }
}
</script>

<style></style>