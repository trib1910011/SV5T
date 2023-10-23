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
    <div class="hoinhap">
        <h4>5. Tiêu chuẩn hội nhập tốt: <span style="font-size: large">Đạt 02 trong 03 tiêu chuẩn sau</span></h4>
        <div>
            <p><span>(5.1) Ngoại ngữ tốt</span> Đạt 01 trong 03 tiêu chí sau</p>
            <p>(5.1.1) Được khen thưởng cuộc thi ngoại ngữ cấp Trường trở lên.</p>
            <p>(5.1.2) Đạt chứng chỉ ngoại ngữ theo bảng quy đổi bên dưới:</p>
            <table class="chungchi" border="1">
                <thead>
                    <th>Đối tượng</th>
                    <th style="width:70px">CEFR</th>
                    <th style="width:70px">IELTS</th>
                    <th style="width:70px">TOEIC</th>
                    <th>TOEFL</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Sinh viên năm 1, 2</td>
                        <td>A2</td>
                        <td>3.0</td>
                        <td>400</td>
                        <td>96 CBT, 31 iBT, 337 ITP</td>
                    </tr>
                    <tr>
                        <td>Sinh viên năm 3 trở lên</td>
                        <td>B1</td>
                        <td>4.5</td>
                        <td>450</td>
                        <td>133 CBT, 45 iBT 450 ITP</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <p>(5.1.3) Đối với sinh viên khóa 47: Đã hoàn thành hoặc được miễn 03 học phần Ngoại ngữ căn bản trở lên.</p>
        <p>(5.1.4) Đối với sinh viên khóa 48: Đã hoàn thành hoặc được miễn 02 học phần Ngoại ngữ căn bản trở lên.</p>
        <p><b>* Lưu ý:</b></p>
        <p style="color: green">- Các chứng chỉ phải được cấp trong thời gian năm học (từ tháng 8/2022 đến tháng 7/2023).</p>
        <p>- Các chứng chỉ được cấp trước thời gian nêu trên, yêu cầu phải đạt thêm 01 trong những tiêu chí sau:</p>
        <p>+ Trong năm học phải học ít nhất 01 học phần hoặc khóa học ngoại ngữ.</p>
        <p>+ Được xác nhận tham gia cuộc thi ngoại ngữ do đơn vị Đoàn - Hội cấp cơ sở trở lên tổ chức.</p>
        <p style="color: green">- Đối tượng sinh viên chuyên ngành ngoại ngữ: chứng chỉ ngoại ngữ được áp dụng với môn ngoại ngữ thứ 2.</p>
        <p><span>(5.2) Tin học:</span> Đạt 01 trong 04 tiêu chí sau</p>
        <p>(5.2.1) Đạt chứng chỉ ứng dụng công nghệ thông tin cơ bản trở lên.</p>
        <p>(5.2.2) Điểm trung bình của 2 học phần tin học căn bản trong năm học đạt điểm B trở lên hoặc điểm M.</p>
        <p>(5.2.3) Được cấp giấy khen hoặc giấy chứng nhận tham gia cuộc thi tin học do Đoàn cấp cơ sở trở lên tổ chức.</p>
        <p>(5.2.4) Trong năm học có học ít nhất 01 học phần (khác học phần Tin học căn bản) hoặc khóa học về tin học, công nghệ thông tin và điểm trung bình học phần đạt từ B hoặc khóa học đạt từ 7.0 điểm (loại khá) trở lên.</p>
        <p><b>* Lưu ý:</b></p>
        <p>- Đối với tiêu chuẩn (5.2.1) không quy định về thời gian.</p>
        <p>- Không xét tiêu chuẩn (5.2) đối với sinh viên các chuyên ngành Công nghệ thông tin, tin học.</p>
        <p style="color: green">- Đối với sinh viên các chuyên ngành Công nghệ thông tin, tin học: điểm trung cộng học kỳ 1 và 2 năm học đạt từ 3.0 trở lên được xét hoàn thành tiêu chuẩn (5.2).</p>
        <p style="color: red">(5.3) Tham gia các hoạt động, phong trào nâng cao kỹ năng hội nhập: Đạt 02 trong 06 tiêu chí sau</p>
        <p>(5.3.1) Được chứng nhận tham gia 01 hoạt động hội nhập do cấp Trường trở lên tổ chức.</p>
        <p>(5.3.2) Được chứng nhận tham gia 01 hoạt động giao lưu với sinh viên quốc tế, trao đổi sinh viên do đơn vị Đoàn - Hội cấp cơ sở và tương đương trở lên tổ chức hoặc tham gia các khóa học ngắn hạn tại nước ngoài.</p>
        <p>(5.3.3) Được Đoàn Thanh niên, Hội Sinh viên các cấp khen thưởng về thành tích xuất sắc trong phong trào sinh viên, thanh niên năm học 2022-2023.</p>
        <p>(5.3.4) Trực tiếp tổ chức hoặc được chứng nhận tham gia ít nhất 01 lớp tập huấn hoặc khóa học bồi dưỡng kỹ năng do đơn vị Đoàn - Hội cấp cơ sở trở lên tổ chức.</p>
        <p>(5.3.5) Đạt điểm B trở lên đối với các học phần về Kỹ năng do trường tổ chức giảng dạy (như Kỹ năng mềm, Đổi mới sáng tạo và khởi nghiệp,…)</p>
        <p>(5.3.6) Đạt từ giải khuyến khích trở lên các cuộc thi tìm hiểu về văn hóa, lịch sử, xã hội trong nước và thế giới do đơn vị Đoàn - Hội cấp cơ sở trở lên tổ chức.</p>
    </div>
    </div>
    
</template>

<script>

export default {
name: "IntComponent",
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
.hoinhap span{
    color: red;
}
button:hover .button_link{
    color: white !important;
}
.button_link{
    text-decoration: none ;
    color: green;
}
.chungchi tbody tr td, thead th  {
    border: 1px solid #0a0a0a !important;
    text-align: center;
}
</style>
