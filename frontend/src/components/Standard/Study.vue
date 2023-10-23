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
    <div class="hoctap">
        <h4>2. Tiêu chuẩn học tập tốt: <span style="font-size: large">Đạt <span>01 trong 02</span> tiêu chí sau</span></h4>
        <p><span>(2.1)</span> Điểm trung bình cộng của học kỳ 1 và học kỳ 2 trong năm học đạt từ <span >2.8</span> trở lên.</p>
        <p><span>(2.2)</span> Điểm trung bình cộng của học kỳ 1 và 2 trong năm học đạt từ <span>2.6</span> trở lên, trong đó học kỳ 2 phải có kết quả học tập lớn hơn học kỳ 1 và số tín chỉ học ở học kỳ 2 phải bằng hoặc lớn hơn số tín chỉ học kỳ 1. </p>
        <p><b>*Lưu ý:</b></p>
        <p>- Không bị nợ học phần trong năm học. Trường hợp sinh viên học lại học phần nợ ở các học kỳ trước trong học kỳ 3 của năm học xét trao danh hiệu, nếu đạt điểm D trở lên sẽ được xét không nợ môn.</p>
        <p style="color:green">- Số tín chỉ trong mỗi học kỳ bằng hoặc lớn hơn 15 tín chỉ, riêng đối với học kỳ cuối cùng phải bằng hoặc lớn hơn 08 tín chỉ.</p>
        <p>- Không xét điểm học tập Học kỳ 3.</p>
        <p>- Ưu tiên khi xét trao danh hiệu:</p>
        <p>+ Tham gia kỳ thi Olympic các môn học do đơn vị Đoàn cấp cơ sở trở lên tổ chức.</p>
        <p>+ Là chủ nhiệm đề tài nghiên cứu khoa học sinh viên trong năm học.</p>
        <p>+ Là thành viên các đội tuyển tham gia thi cấp quốc gia, quốc tế.</p>
        <p>+ Tham gia các cuộc thi ý tưởng sáng tạo.</p>
    </div>
    </div>
    
</template>

<script>

export default {
name: "StudyComponent",
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
.hoctap span{
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
