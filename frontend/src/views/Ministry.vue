<template>
    <div class="ministry">
        <Header />
        <router-view class="p-3"></router-view>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
export default {
    name: "MinistryComponent",
    components: { Header},
};
</script>

<style></style>
