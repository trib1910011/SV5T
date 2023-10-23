<template>
    <div class="teacher w-100 h-100 row m-0">
        <Header class="p-0" />
        <router-view></router-view>
        <InforUser></InforUser>
    </div>
</template>

<script>
import InforUser from "@/components/Student/Infor/InforUser.vue";
import Header from "../components/Header/Header.vue";

export default {
    name: "TeacherComponent",
    components: { Header, InforUser },
};
</script>

<style scoped></style>
