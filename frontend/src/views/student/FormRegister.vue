<template>
    <div class="col-12 d-flex">
        <TitleStructure :title="`Thông tin sinh viên`" class="col-6 me-4"></TitleStructure>

        <TitleStructure :title="`Đăng ký sinh viên 5 tốt`" class="col"></TitleStructure>

    </div>
    <div class="d-flex">
        <InforStudent></InforStudent>
        <div class="mx-5" style="width: 100%">
            <div v-if="empty_check !== ''">
                <h5 style="color: red;width: 100%;text-align: center;font-weight: bold;">{{ this.empty_check }}</h5>
            </div>
            <div v-else>
                <div v-for="(item, index) in spell" :key="index">
                    <div v-if="item.status == 'Bắt đầu'">

                        <div class="object-item accordion mb-3" :id="`accordion${index}`">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" :id="`heading${index}`">
                                    <button class="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse"
                                        :data-bs-target="`#collapse${index}`" aria-expanded="false"
                                        :aria-controls="`collapse${index}`">
                                        <Strong>
                                            <div style="width: 100%;"><i class="bi bi-bell"> </i> Đăng ký xét SV5T: {{
                                                item.name
                                            }}
                                            </div>
                                        </Strong>
                                    </button>
                                </h2>
                                <div :id="`collapse${index}`" class="accordion-collapse collapse"
                                    :aria-labelledby="`heading${index}`" :data-bs-parent="`#accordion${index}`">
                                    <div class="accordion-body row">
                                        <div class="col-6">
                                            <strong>Mã đợt: </strong> {{ item.spellname }}
                                        </div>
                                        <div class="col-6">
                                            <strong>Tên đợt: </strong> {{ item.name }}
                                        </div>
                                        <div class="col-6">
                                            <strong>Ngày bắt đầu: </strong> {{ item.start }}
                                        </div>
                                        <div class="col-6">
                                            <strong>Ngày kết thúc: </strong> {{ item.end }}
                                        </div>
                                        <div class="col-12 d-flex justify-content-center mt-4"
                                            >

                                            <button type="button" class="btn btn-outline-success p-2"
                                                data-bs-toggle="modal" data-bs-target="#AssessResultModal"
                                                style="font-size: 15px" @click="checkTime(item.id, item.start, item.end)">
                                                <i class="bi bi-vector-pen"></i> Đăng ký xét
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <CreateForm v-bind:dataParent="passData"></CreateForm>
        <ViewDetail v-bind:dataParent="passData"></ViewDetail>
    </div>
    <TitleStructure :title="`Danh sách đơn đã đăng ký`" class="col"></TitleStructure>
    <div class="mt-2 table-wrapper-scroll-y my-custom-scrollbar fixTableHead">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="text-center" scope="col">#</th>
                    <th class="text-center" scope="col">
                        Mã đơn
                    </th>
                    <th class="text-center" scope="col">
                        Đợt
                    </th>
                    <th class="text-center" scope="col">Ngày đăng ký</th>
                    <th class="text-center" scope="col">
                        Kết quả
                    </th>
                    <th class="text-center" scope="col">Xem chi tiết</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in form" :key="index">

                    <th class="text-center" scope="row">
                        {{ index + 1 }}
                    </th>
                    <td class="text-center">{{ item.id }}</td>
                    <td class="text-center">{{ item.spellname }}</td>
                    <td class="text-center">{{ `${new Date(item.created).getHours().toString().padStart(2, '0')}:${new
                        Date(item.created).getMinutes().toString().padStart(2, '0')} ${item.created.toString().slice(0,
                            10)}` }}</td>
                    <td class="text-center" style="color: red;font-weight: bold;">{{ item.result }}</td>
                    <td class="text-center"><button type="button" class="btn btn-outline-success p-2" data-bs-toggle="modal"
                            data-bs-target="#ViewDetailModal" @click="viewDetail(item.id)"><i class="bi bi-eye-fill"></i>
                            Xem chi tiết</button></td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import InforStudent from "@/components/GlobalComponent/InforStudent.vue";
import TitleStructure from "../../components/GlobalComponent/TitleStructure.vue";
import axios from "axios";
import CreateForm from "@/components/Student/Form/CreateForm.vue";
import ViewDetail from "@/components/Student/Form/ViewDetail.vue"
import { mapGetters } from "vuex";
export default {
    name: "FormRegister",
    components: { TitleStructure, InforStudent, CreateForm, ViewDetail },
    data() {
        return {
            spell: [],
            empty_check: "",
            form: [],
            passData: {},
        };
    },
    created() {
        this.showSpell()
        this.showForm()
    },
    computed: {
        ...mapGetters({ st: "getAccount" }),
    },
    methods: {
        async viewDetail(id_input) {
            const token = localStorage.getItem("token");

            await axios.get(`http://localhost:3000/student/get-form-id/${id_input}`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }).then((data) => {
                const ob = {
                    data: data.data.findForm
                }
                localStorage.setItem('view_detail_form', JSON.stringify(ob))
                this.passData = data.data.findForm
            }).catch((e) => {
                console.log(e)
            })

        },
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
                this.empty_check = "CHƯA ĐẾN ĐỢT ĐĂNG KÝ"
            }

            this.spell = arr_result;
        },

        async showForm() {
            const token = localStorage.getItem("token");
            const data1 = await axios.get("http://localhost:3000/student/get-form", {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })

            const data_form = data1.data.arr
            const arr_result = []
            data_form.forEach((item, index) => {
                if (item.studentId.username == this.st.username) {



                    let ob = {
                        stt: index + 1,
                        id: item._id,
                        username: item.studentId.username,
                        name: item.studentId.name,
                        major: item.major,
                        course: item.course,
                        result: item.result,
                        spellname: item.spellname,
                        standard: item.standard,
                        created: item.createdAt
                    }

                    arr_result.push(ob)
                }
            })


            this.form = arr_result

        },
        async registerForm(id_input) {
            await axios.get(`http://localhost:3000/spell/get-spell-id/${id_input}`, {
            }).then((data) => {
                const ob = {
                    data: data.data.findSpell
                }
                localStorage.setItem('view_detail_form', JSON.stringify(ob))
                this.passData = data.data.findSpell
            }).catch((e) => {
                console.log(e)
            })

        },
        async checkTime(id_input, input_start, input_end) {
            const today = new Date();
            const startDate = new Date(input_start);
            const endDate = new Date(input_end);
            if (today >= startDate && today <= endDate) 
            {   
                document.querySelector('.modal-content').style.display='block'
                this.registerForm(id_input)
                return;
            } else {
                alert('ĐÃ QUA THỜI GIAN ĐĂNG KÝ')
                document.querySelector('.modal-content').style.display='none'
            }



        }
    }

}    
</script>
<style>
.my-custom-scrollbar {
    position: relative;
    height: 300px;
    overflow: auto;
}

.table-wrapper-scroll-y {
    display: block;
}

.fixTableHead {
    overflow-y: auto;
    height: 400px;
}

.fixTableHead thead th {
    position: sticky;
    top: 0;
    background-color: white;
}
</style>
