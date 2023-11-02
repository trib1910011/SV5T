<template>
    <div>
        <div class="admin-manage animate__animated animate__fadeIn">
            <TitleStructure :title="`Danh sách đơn sinh viên 5 tốt`"></TitleStructure>
            <div class="type-form col-12 d-flex justify-content-center">
                <div class="type__item" id="Tất cả đơn" @click="handleFilter">
                    Tất cả đơn
                </div>
                <div class="type__item" id="Đang xử lý" @click="handleFilter">
                    Đang xử lý
                </div>
                <div class="type__item" id="Đạt" @click="handleFilter">
                    Đạt
                </div>
                <div class="type__item" id="Chưa đạt" @click="handleFilter">
                    Chưa đạt
                </div>
            </div>
            <div class="list-form mt-5 table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">#</th>
                            <th class="text-center" scope="col">
                                Mã đơn
                            </th>
                            <th class="text-center" scope="col">Đợt</th>
                            <th class="text-center" scope="col">
                                Họ tên sinh viên
                            </th>
                            <th class="text-center" scope="col">Mã số sinh viên</th>
                            <th class="text-center" scope="col">Ngành</th>
                            <th class="text-center" scope="col">Khóa</th>
                            <th class="text-center" scope="col">Ngày đăng ký</th>
                            <th class="text-center" scope="col">Kết quả</th>
                            <th class="text-center" scope="col">Xem chi tiết</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in form" :key="index">
                            <th class="text-center" scope="row">
                                {{ index + 1 }}
                            </th>
                            <td class="text-center">{{ item.id.slice(item.id.length - 4, item.id.length) }}</td>
                            <td class="text-center">{{ item.spellname }}</td>
                            <td class="text-center">{{ item.name }}</td>
                            <td class="text-center">{{ item.username }}</td>
                            <td class="text-center">{{ item.major }}</td>
                            <td class="text-center">{{ item.course }}</td>
                            <td class="text-center">{{ `${new Date(item.created).getHours().toString().padStart(2,
                                '0')}:${new
                                    Date(item.created).getMinutes().toString().padStart(2, '0')}
                                                            ${item.created.toString().slice(0,
                                        10)}` }}</td>
                            <td class="text-center">{{ item.result }}</td>
                            <td class="text-center"><button type="button" class="btn btn-outline-success p-2"
                                    data-bs-toggle="modal" data-bs-target="#ViewDetailModal" @click="viewDetail(item.id)"><i
                                        class="bi bi-eye-fill"></i> Xem chi tiết</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <ViewDetail v-bind:dataParent="passData"></ViewDetail>
</template>

<script>
import axios from "axios";
import TitleStructure from "../../components/GlobalComponent/TitleStructure.vue";
import ViewDetail from "@/components/Student/Form/ViewDetail.vue";
import { mapGetters } from "vuex";

export default {
    name: "FormManageMini",
    components: { TitleStructure, ViewDetail },
    created() {
        this.showForm()
    },
    data() {
        return {
            form: [],
            passData: {},
            choose: 'Tất cả đơn'
        };
    },
    computed: mapGetters({ formCurrent: "getFormCurrent" }),
    mounted() {
        document.querySelectorAll(".type__item")[0].classList.add("active");

        const typeItems = document.querySelectorAll(".type__item");

        [...typeItems].forEach(function (typeItem) {
            typeItem.addEventListener("click", handleBorderItem);
        });

        function handleBorderItem(event) {
            [...typeItems].forEach((typeItem) => {
                typeItem.classList.remove("active");
            });
            event.target.classList.add("active");
        }
    },
    methods: {
        handleFilter(event) {
            const filter = event.target.id;
            this.choose = filter
            this.showForm()
            // if (filter == "pass") {
            //     this.showForm()
            //     setTimeout(() => {
            //         const filter_new = this.form.filter((form) => form.result == "Đạt")

            //         this.form = filter_new
            //     }, 1500)
            // } else if (filter == "fail") {
            //     this.showForm()
            //     setTimeout(() => {
            //         const filter_new = this.form.filter((form) => form.result == "Chưa đạt")

            //         this.form = filter_new
            //     }, 1500)

            // } else if (filter == "process") {
            //     this.showForm()
            //     setTimeout(() => {
            //         const filter_new = this.form.filter((form) => form.result == "Đang xử lý")

            //         this.form = filter_new
            //     }, 1500)


            // } else if (filter == "all") {
            //     this.showForm()
            // }
        },
        async showForm() {
            const token = localStorage.getItem("token");
            const data1 = await axios.get("http://localhost:3000/ministry/get-form", {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })

            const data_form = data1.data.arr
            const arr_result = []
            data_form.forEach((item, index) => {
                if (this.choose == "Tất cả đơn") {
                    let ob = {
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
                    arr_result.push(ob)
                } else if (this.choose == item.result) {
                    let ob = {
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
                    arr_result.push(ob)
                }


            }

            )

            this.form = arr_result;
        },
        async viewDetail(id_input) {
            const token = localStorage.getItem("token");

            await axios.get(`http://localhost:3000/ministry/get-form-id/${id_input}`, {
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
    },
};
</script>

<style scoped>
.type__item {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 2px solid rgba(64, 68, 162, 0.25);
}

.type__item.active {
    transition: border-bottom 0.5s linear;
    border-bottom-color: #2f2fe6;
}

.my-custom-scrollbar {
    position: relative;
    height: 400px;
    overflow: auto;
}

.table-wrapper-scroll-y {
    display: block;
}
</style>
