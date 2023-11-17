<template>
    <div class="assess-result">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="AssessResultModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="min-width: 800px !important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold" id="ModalLabel" style="text-align: center;width: 100%;">
                            ĐƠN ĐĂNG KÝ XÉT SINH VIÊN 5 TỐT
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="cancelForm"></button>
                    </div>
                    <div class="col-12 d-flex mx-5">
                        <div class="col-6">
                            <template v-for="(item, index) in student" :key="index">
                                <strong>HỌ VÀ TÊN: </strong> {{ item.name }}<br>
                                <strong>MSSV: </strong> {{ item.username }}<br>
                                <strong>NGÀNH: </strong> {{ item.major }}<br>
                                <strong>KHÓA: </strong> {{ item.course }}<br>
                                <strong>LỚP: </strong> {{ item.classStudent }}<br>
                            </template>
                                <div >
                                    <strong>ĐỢT: </strong> {{ dataParent.name }}
                                </div>




                        </div>
                        <div class="col-6 mt-3">
                            <div>
                                <strong>GPA: </strong>
                                <input class="gpa" type="text" style="width: 50px;" v-model="gpa">
                            </div>
                            <div>
                                <strong>ĐIỂM RÈN LUYỆN: </strong>
                                <input class="drl" type="text" style="width: 50px;" v-model="drl">
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="table-assess d-flex">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="col-1">STT</th>
                                        <th scope="col" class="col-10">Tiêu chí đánh giá</th>
                                        <th scope="col" class="col-1">Đạt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">I</th>
                                        <td style="font-weight: bold">Đạo đức tốt</td>
                                    </tr>
                                    <tr v-for="fruit in dataParent.structure" :key="fruit.id">
                                        <template v-if="fruit.split('-')[0] == 'DD'">
                                            <th scope="row"></th>
                                            <td>{{ fruit.split("-")[1] }}</td>
                                            <td><input type="checkbox" style="height: 20px;width: 20px;"
                                                    class="standard_check_box"
                                                    v-bind:data-standard="(`${fruit}`)"
                                                    ></td>
                                        </template>

                                    </tr>
                                    <tr>
                                        <th scope="row">II</th>
                                        <td style="font-weight: bold">
                                            Học tập tốt
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Đạt 1 trong các tiêu chuẩn sau:</td>
                                    </tr>
                                    <tr v-for="fruit in dataParent.structure" :key="fruit.id">
                                        <template v-if="fruit.split('-')[0] == 'HT'">
                                            <th scope="row"></th>
                                            <td>{{ fruit.split("-")[1] }}</td>
                                            <td><input type="checkbox" style="height: 20px;width: 20px;"
                                                    class="standard_check_box"
                                                    v-bind:data-standard="(`${fruit}`)"
                                                    ></td>
                                        </template>

                                    </tr>
                                    <tr>
                                        <th scope="row">III</th>
                                        <td style="font-weight: bold">Thể lực tốt</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Đạt 1 trong các tiêu chuẩn sau:</td>
                                    </tr>
                                    <tr v-for="fruit in dataParent.structure" :key="fruit.id">
                                        <template v-if="fruit.split('-')[0] == 'TL'">
                                            <th scope="row"></th>
                                            <td>{{ fruit.split("-")[1] }}</td>
                                            <td><input type="checkbox" style="height: 20px;width: 20px;"
                                                    class="standard_check_box"
                                                    v-bind:data-standard="(`${fruit}`)"
                                                    ></td>
                                        </template>

                                    </tr>
                                    <tr>
                                        <th scope="row">IV</th>
                                        <td style="font-weight: bold">Tình nguyện tốt</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Đạt 1 trong các tiêu chuẩn sau:</td>
                                    </tr>
                                    <tr v-for="fruit in dataParent.structure" :key="fruit.id">
                                        <template v-if="fruit.split('-')[0] == 'TN'">
                                            <th scope="row"></th>
                                            <td>{{ fruit.split("-")[1] }}</td>
                                            <td><input type="checkbox" style="height: 20px;width: 20px;"
                                                    class="standard_check_box"
                                                    v-bind:data-standard="(`${fruit}`)"
                                                    ></td>
                                        </template>

                                    </tr>
                                    <tr>
                                        <th scope="row">V</th>
                                        <td style="font-weight: bold">Hội nhập tốt</td>
                                    </tr>
                                    
                                    <tr v-for="fruit in dataParent.structure" :key="fruit.id">
                                        <template v-if="fruit.split('-')[0] == 'HN'">
                                            <th scope="row"></th>
                                            <td>{{ fruit.split("-")[1] }}</td>
                                            <td><input type="checkbox" style="height: 20px;width: 20px;"
                                                    class="standard_check_box"
                                                    v-bind:data-standard="(`${fruit}`)"
                                                    ></td>
                                        </template>

                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td style="font-weight: bold">Các hoạt động tiêu biểu khác:</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <textarea placeholder="Điền các hoạt động đã tham gia (ghi ngày cụ thể)..."
                                                name="" id="" cols="10" rows="3" class="form-control"
                                                v-model="more"></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cancelForm">
                            Đóng
                        </button>

                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="handleAssess"
                            >
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import config from "@/config";
import axios from "axios";
export default {
    name: "CreateForm",
    props: ['dataParent'],
    data() {
        return {
            passData: {},
            structure: [],
        };
    },
    created() {
        // this.showSpell()
        // this.getStandard()
        this.showInforStudent()
    },
    methods: {
        // async showSpell() {
        //     const data = await axios.get("http://localhost:3000/spell/get-all-spell")


        //     const arr_data = data.data.findSpell;

        //     const arr_result = arr_data.map((item, index) => {
        //         return {
        //             id: item._id,
        //             stt: index + 1,
        //             spellname: item.spellname,
        //             name: item.name,
        //             start: item.start,
        //             end: item.end,
        //             status: item.status ? 'Bắt đầu' : 'Kết thúc'
        //         }


        //     })

        //     this.spell = arr_result;

        // },
        async handleAssess() {
            var arr_standard = []
            let DOM_Checkbox_standart = document.querySelectorAll(".standard_check_box");

            DOM_Checkbox_standart.forEach((item) => {
                if (item.checked) {
                    arr_standard.push(item.dataset.standard)
                }
            })

            // let spell_name_choose = ""
            // this.spell.forEach((item) => {
            //     if (item.status === "Bắt đầu") {
            //         spell_name_choose = item.name
            //     }
            // })

            const ob = {
                studentId: this.student[0].id,
                classStudent: this.student[0].classStudent,
                major: this.student[0].major,
                course: this.student[0].course,
                spellname: this.dataParent.name,
                gpa: this.gpa,
                drl: this.drl,
                standard: arr_standard,
                more: this.more,
                count_check: this.count_check
            }
            const token = localStorage.getItem("token");

            const res = await axios.post("http://localhost:3000/student/register-form",
                ob, {
                headers: {
                    Authorization: "Bearer " + token,
                },

            })
            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            })
            this.$parent.showForm()
            // .then((data) => {
            //     console.log(data)
            // }).catch((e) => {
            //     console.log(e)
            // })

            //Sau khi thoát khỏi form
            DOM_Checkbox_standart.forEach((item) => {
                item.checked = false
            })
            this.gpa = "";
            this.drl = "";
            this.more = "";
        },

        cancelForm() {
            let DOM_Checkbox_standart = document.querySelectorAll(".standard_check_box");
            DOM_Checkbox_standart.forEach((item) => {
                item.checked = false
            })
            this.gpa = "";
            this.drl = "";
            this.more = "";
        },
        async getStandard() {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/student/get-standard",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            const arr_data = data.data.standards;

            const arr_result = arr_data.map((item, index) => {

                return {
                    id: item._id,
                    stt: index + 1,
                    codeStandard: item.codeStandard,
                    categoryName: item.categoryName,
                    contentStandard: item.contentStandard,
                    status: item.status ? 'Hiện' : 'Ẩn',
                    check: item.check
                }


            })
            this.standards = arr_result;
        },
        async showInforStudent() {
            const token = localStorage.getItem("token");
            const data = await axios.post("http://localhost:3000/student/get-student-infor",
                {
                    token
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )

            const arr_data = data.data.result;

            const arr_result = [arr_data].map((item, index) => {

                return {
                    id: item.studentId,
                    urlAvatar: item.urlAvatar,
                    stt: index + 1,
                    username: item.username,
                    name: item.name,
                    major: item.major,
                    course: item.course,
                    classStudent: item.classStudent
                }

            })


            this.student = arr_result;

        },

    }


};
</script>

<style scoped>
.table-assess {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style> 
