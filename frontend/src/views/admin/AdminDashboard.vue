<template>
       <TitleStructure :title="`Thống kê tài khoản`" class="account"></TitleStructure>
       <DashBoard></DashBoard>
       <LineChartAccount></LineChartAccount>
</template>

<script>
import DashBoard from '@/components/Admin/DashBoard/DashBoard.vue';
import LineChartAccount from '@/components/Admin/DashBoard/LineChartAccount.vue';
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';

export default {
    name: "DashBoardComponent",
    components: { DashBoard, TitleStructure, LineChartAccount },
};
</script>

<style>
.account{
    padding: 20px !important;
}
</style>
