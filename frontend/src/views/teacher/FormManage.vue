<template>
    <div class="col-12 d-flex">
        <TitleStructure :title="`Thông tin giảng viên`" class="col-6 me-4"></TitleStructure>
        <TitleStructure :title="`Thông báo đợt xét duyệt sinh viên 5 tốt`" class="col"></TitleStructure>

    </div>
    <div class="d-flex">
        <InforTeacher></InforTeacher>
        <div class="mx-5" style="width: 100%">
            <div v-if="empty_check !== ''">
                <h5 style="color: red;width: 100%;text-align: center;">{{ this.empty_check }}</h5>
            </div>
            <div v-else>
                <div v-for="(item, index) in spell" :key="index">
                    <div v-if="item.status == 'Bắt đầu'">
                        <p><span style="font-weight: bold;"><i class="bi bi-bell"> </i> Thông báo đăng ký:</span> {{
                            item.name }}</p>
                        <p style="margin-left: 20px;"><span style="font-weight: bold;">Từ ngày:</span> {{ item.start }}</p>
                        <p style="margin-left: 20px;"><span style="font-weight: bold;">Đến ngày:</span> {{ item.end }}</p>
                        <p style="margin-left: 20px;"><button type="button" class="btn btn-outline-primary p-2" data-bs-toggle="modal" data-bs-target="#ViewStandard"><i class="bi bi-eye-fill"></i> Tiêu chí đánh giá</button></p>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <TitleStructure :title="`Danh sách sinh viên đăng ký`"></TitleStructure>
    <div class="mt-2 table-wrapper-scroll-y my-custom-scrollbar">
        <table class="table table-striped">
        <thead>
            <tr>
                <th class="text-center" scope="col">#</th>
                <th class="text-center" scope="col">Đợt</th>
                <th class="text-center" scope="col">Mã đơn</th>
                <th class="text-center" scope="col">
                    Mã số sinh viên
                </th>
                <th class="text-center" scope="col">Họ tên sinh viên</th>
                <th class="text-center" scope="col">
                    Ngành
                </th>
                <th class="text-center" scope="col">
                    Khóa
                </th>
                <th class="text-center" scope="col">Ngày đăng ký</th>
                <th class="text-center" scope="col">Chi tiết đơn</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in form" :key="index">
                <th class="text-center" scope="row">
                    {{ item.stt }}
                </th>
                <td class="text-center">{{ item.spellname }}</td>
                <td class="text-center">{{ item.id }}</td>
                <td class="text-center">{{ item.username }}</td>
                <td class="text-center">{{ item.name }}</td>
                <td class="text-center">{{ item.major }}</td>
                <td class="text-center">{{ item.course }}</td>
                <td class="text-center">{{ `${new Date(item.created).getHours().toString().padStart(2, '0')}:${new Date(item.created).getMinutes().toString().padStart(2, '0')} ${item.created.toString().slice(0, 10)}` }}</td>
                <td class="text-center"><button type="button" class="btn btn-outline-success p-2" data-bs-toggle="modal"
                                                data-bs-target="#ViewDetailModal" @click="viewDetail(item.id, st.id)"><i class="bi bi-eye-fill"></i> Xem chi tiết</button></td>
            </tr>
        </tbody>
    </table>
    </div>
    <ViewDetail v-bind:dataParent="passData"></ViewDetail>
    <ViewStandard></ViewStandard>
</template>

<script>
import InforTeacher from "@/components/GlobalComponent/InforTeacher.vue";
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";
import ViewDetail from "@/components/Student/Form/ViewDetail.vue";
import ViewStandard from "@/components/Teacher/ViewStandard.vue"
import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: "FormManage",
    components: { InforTeacher, TitleStructure, ViewDetail, ViewStandard },
    data() {
        return {
            spell: [],
            empty_check: "",
            form: [],
            passData: {}
        };
    },
    created() {
        this.showSpell(),
            this.showForm()
    },
    computed: {
        ...mapGetters({ st: "getAccount" }),
    },
    methods: {
        async showSpell() {
            const data = await axios.get("http://localhost:3000/spell/get-all-spell")

            const arr_data = data.data.findSpell;

            const arr_result = arr_data.map((item, index) => {

                return {
                    id: item._id,
                    stt: index + 1,
                    spellname: item.spellname,
                    name: item.name,
                    start: item.start,
                    end: item.end,
                    status: item.status ? 'Bắt đầu' : 'Kết thúc'
                }


            })

            var count_empty = 0
            arr_result.forEach((item) => {
                if (item.status === "Kết thúc") {
                    count_empty++;
                }
            })

            if (count_empty === arr_result.length) {
                this.empty_check = "CHƯA CÓ THỜI GIAN ĐĂNG KÝ ĐỢT MỚI"
            }

            this.spell = arr_result;
        },
        async showForm() {
            const token = localStorage.getItem("token");
            const data1 = await axios.get("http://localhost:3000/teacher/get-form", {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })

            const data_form = data1.data.arr
            const arr_form =data_form.map((item, index) => {
                return {
                    stt: index + 1,
                    id: item._id,
                    username: item.studentId.username,
                    name: item.studentId.name,
                    major: item.major,
                    course: item.course,
                    drl: item.drl,
                    gpa: item.gpa,
                    result: item.result,
                    spellname: item.spellname,
                    standard: item.standard,
                    created: item.createdAt
                }
            })
            this.form = arr_form;
        },
        async viewDetail(id_input, st_id) {
            const token = localStorage.getItem("token");

            await axios.get(`http://localhost:3000/teacher/get-form-id/${id_input}`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }).then((data) => {
                const ob = {
                    id_teacher : st_id,
                    data: data.data.findForm
                }
                localStorage.setItem('view_detail_form', JSON.stringify(ob))
                this.passData = data.data.findForm
            }).catch((e) => {
                console.log(e)
            })
            
        },

    }
};
</script>

<style scoped>
.my-custom-scrollbar {
    position: relative;
    height: 300px;
    overflow: auto;
}

.table-wrapper-scroll-y {
    display: block;
}
</style>
                        
