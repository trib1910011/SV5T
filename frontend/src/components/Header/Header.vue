<template>
    <div class="header bg-white">
        <IntroduceApp />
        <Navbar />
    </div>
</template>

<script>
import IntroduceApp from "./IntroduceApp.vue";
import Navbar from "./Navbar.vue";

export default {
    name: "HeaderComponent",
    components: { IntroduceApp, Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@800&display=swap");
</style>
