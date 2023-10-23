<template>
    <div class="header">
        <Content></Content>
        <Footer></Footer>
    </div>
</template>

<script>
import Content from './components/Content/Content.vue'
import Footer from './components/Footer/Footer.vue';

export default {
    name: "App",
    components: { Content, Footer },
    created() {
        this.$store.dispatch("setAccount");
    },
  
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
#app {
    font-family: "Noto Sans", sans-serif;
    box-sizing: border-box;
    background-image: url("https://elearning.ctu.edu.vn/pluginfile.php/1/theme_lambda/pagebackground/1662695177/CTU_Blank_white.png");
}
</style>
