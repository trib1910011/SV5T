<template>
    <div class="col-12 d-flex justify-content-center mt-3 mb-3">
        <button class="btn btn-outline-success mx-2"><router-link class="button_link" to="/student/standard/moral">Đạo đức tốt</router-link></button>
        <button class="btn btn-outline-success mx-2"><router-link class="button_link" to="/student/standard/study">Học tập tốt</router-link></button>
        <button class="btn btn-outline-success mx-2"><router-link class="button_link" to="/student/standard/health">Thể lực tốt</router-link></button>
        <button class="btn btn-outline-success mx-2"><router-link class="button_link" to="/student/standard/volunteer">Tình nguyện tốt</router-link></button>
        <button class="btn btn-outline-success mx-2"><router-link class="button_link" to="/student/standard/integrate">Hội nhập tốt</router-link></button>
    </div>
    <div>
        <img src="/SV5T.jpg" alt="SV5T"
    style="width: 650px;height: 500px;float:right; border-radius: 5%;">
    <div class="tinhnguyen">
        <h4>4. Tiêu chuẩn tình nguyện tốt: <span style="font-size: large">Đạt 01 trong 03 tiêu chuẩn sau</span></h4>
        <p><span>(4.1)</span> Được khen thưởng trong hoạt động tình nguyện.</p>
        <p><span>(4.2)</span> Tham gia ít nhất 03 hoạt động tình nguyện.</p>
        <p><span>(4.3)</span> Tham gia ít nhất 02 lần hiến máu tình nguyện.</p>
    </div>
    </div>
    
</template>

<script>

export default {
name: "VolunteerComponent",
components: {}
};
</script>

<style>
.img{
    width: 100px;
    height: 100px;
}
h4{
    color: blue;
}
.tinhnguyen span{
    color: red;
}
button:hover .button_link{
    color: white !important;
}
.button_link{
    text-decoration: none ;
    color: green;
}
</style>
