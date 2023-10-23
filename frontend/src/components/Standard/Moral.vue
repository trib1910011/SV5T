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
        <div class="daoduc">
            <h4>1. Tiêu chuẩn đạo đức tốt: <span style="font-size: large">Đạt 3 tiêu chuẩn sau</span></h4>
            <p><span>(1.1)</span> Điểm rèn luyện trung bình cộng của năm học đạt từ <span style="color: red;">80 điểm</span> trở lên.</p>
            <p><span>(1.2)</span> Không vi phạm pháp luật và các quy chế, nội quy của nhà trường, quy định của địa phương và công cộng.</p>
            <p><span>(1.3)</span> Đạt thêm <span>01</span> trong các tiêu chí sau:</p>
            <p>+ Tham gia cuộc thi tìm hiểu về các môn khoa học chính trị, tư tưởng Hồ Chí Minh từ cấp khoa, viện, bộ môn (sau đây gọi chung là khoa), liên chi hội sinh viên trở lên tổ chức.</p>
            <p>+ Tham gia cuộc thi tìm hiểu về lịch sử, văn hóa, con người Việt Nam từ cấp khoa, liên chi hội sinh viên trở lên tổ chức.</p>
            <p>+ Tham gia các hoạt động giáo dục lòng yêu nước, tinh thần tự hào dân tộc: tham quan các di tích lịch sử, bảo tàng; thăm hỏi mẹ Việt Nam Anh hùng; “Lễ thắp nến tri ân các anh hùng liệt sĩ”; hội thi hát ca khúc truyền thống; hoạt động hướng về biên giới, hải đảo,…</p>
            <p>+ Tham gia hoạt động giáo dục đạo đức, lối sống văn hóa cho sinh viên: tham gia Đội Cờ đỏ, An ninh xung kích; tham gia hoạt động tuyên truyền về pháp luật, kiến thức phòng tránh các tệ nạn xã hội;…</p>
        </div>
        </div>
        
</template>

<script>

export default {
    name: "MoralComponent",
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
    .daoduc span{
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
