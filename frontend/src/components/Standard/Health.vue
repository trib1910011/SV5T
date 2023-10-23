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
    <div class="theluc">
        <h4>3. Tiêu chuẩn thể lực tốt: <span style="font-size: large">Đạt 01 trong 02 tiêu chuẩn sau</span></h4>
        <p><span>(1.1)</span> Trong năm học phải học ít nhất 01 học phần Giáo dục thể chất (học phần có rèn luyện thể lực) và đạt điểm B trở lên.</p>
        <p><span>(1.2)</span> Tham gia ít nhất 01 hoạt động rèn luyện thể lực (thể dục, thể thao, dân vũ) do đơn vị Đoàn - Hội cấp cơ sở trở lên tổ chức.</p>
        <p><b style="font-style: italic;">* Đối với những sinh viên khuyết tật:</b> tiêu chuẩn về thể lực bao gồm tập thể dục hàng ngày hoặc rèn luyện ít nhất 01 môn thể thao dành cho người khuyết tật.</p>
    </div>
    </div>
    
</template>

<script>

export default {
name: "HealthComponent",
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
.theluc span{
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
