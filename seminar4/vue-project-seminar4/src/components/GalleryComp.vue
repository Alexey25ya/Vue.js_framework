<template>
    <div>
        <div class="preview">
            <img :src='imglinks[currentImg]' alt="img" class="mainimg">
        </div>
        <div class="images">
            <img v-for="(img, index) in imglinks" :src="img" :key="index" @click="currentImg = index">
        </div>
    </div>
</template>
<script>
export default {
    name: 'GalleryComp',
    data() {
        return {
            imglinks: [
                'https://avatars.mds.yandex.net/i?id=410557de4e75d41af00bb51be828290b_l-4620768-images-thumbs&n=27&h=480&w=480', 'https://static.rustore.ru/apk/256380351/content/ICON/d4db7e5a-8a8d-46ad-9509-1cefcf2e40ab.jpg', 'https://play-lh.googleusercontent.com/c_RFVsWfu89ctt7B6smzohv5UBVietoRji26alQNBlOJP6if4LzJAkL3Bw-2MxvuUKk'
            ],
            currentImg: 0
        }
    }
}
</script>
<style scoped>
img {
    width: 250px;
}

.mainimg {
    width: 500px;
}
</style>