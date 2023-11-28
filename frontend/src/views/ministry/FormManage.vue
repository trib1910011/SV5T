<template>
    <div>
        <div class="admin-manage animate__animated animate__fadeIn">
            <TitleStructure :title="`Danh sách đơn sinh viên 5 tốt`"></TitleStructure>
            <div class="type-form col-12 d-flex justify-content-center">
                <div class="type__item" id="Tất cả đơn" @click="handleFilter" style="font-weight: bold;">
                    Tất cả đơn
                </div>
                <div class="type__item" id="Đang xử lý" @click="handleFilter" style="font-weight: bold;">
                    Đang xử lý
                </div>
                <div class="type__item" id="Đạt" @click="handleFilter" style="font-weight: bold;">
                    Đạt
                </div>
                <div class="type__item" id="Chưa đạt" @click="handleFilter" style="font-weight: bold;">
                    Chưa đạt
                </div>
            </div>
            <div class="col-5" style="margin-left: 450px;">
                <div class="input-group mb-3 mt-3">
                    <span class="input-group-text"><strong>Họ tên</strong></span>
                    <input type="text" class="form-control search-form" placeholder="Nhập tên/mã sinh viên"
                        aria-label="Username" aria-describedby="basic-addon1">
                    <button type="button" class="btn btn-primary" @click="SearchForm()">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id=""><strong>Đợt</strong></span>
                    <select id="spell" class="form-select col-9" aria-label="Default select example">
                        <option selected value="Tất cả">Tất cả</option>
                        <option v-bind:value="item.name" v-for="(item, index) in spell" :key="index">{{ item.name }}
                        </option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id=""><strong>Khóa</strong></span>
                    <select id="course" class="form-select col-9" aria-label="Default select example">
                        <option selected value="Tất cả">Tất cả</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id=""><strong>Ngành</strong></span>
                    <select id="major" class="form-select col-9" aria-label="Default select example"
                        @click="changeMajor($event)">
                        <option selected value="Tất cả">Tất cả</option>
                        <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                        <option value="Truyền thông đa phương tiện">Truyền thông đa phương tiện</option>
                        <option value="An toàn thông tin">An toàn thông tin</option>
                        <option value="Khoa học máy tính">Khoa học máy tính</option>
                        <option value="Kỹ thuật máy tính">Kỹ thuật máy tính</option>
                        <option value="Mạng máy tính và truyền thông dữ liệu">Mạng máy tính và truyền thông dữ liệu
                        </option>
                        <option value="Kỹ thuật phần mềm">Kỹ thuật phần mềm</option>
                        <option value="Hệ thống thông tin">Hệ thống thông tin</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id=""><strong>Lớp</strong></span>
                    <select id="classStudent" class="form-select col-9" aria-label="Default select example">
                        <option selected value="Tất cả">Tất cả</option>
                        <option v-bind:value="item.classStudent" v-for="(item, index) in classStudent" :key="index">{{
                            item.classStudent }}</option>
                    </select>
                </div>
                <div style="margin-left: 150px;">
                    <button type="button" class="btn btn-secondary mx-3" data-bs-dismiss="modal" @click="resetAll()">
                        <i class="bi bi-arrow-counterclockwise"></i>Đặt lại
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="searchInfo()">
                        <i class="bi bi-search"></i>Tìm kiếm
                    </button>
                </div>

            </div>
            <div style="float: right;">
                <button type="button" class="btn btn-primary"><export-excel :data="form">
                    XUẤT FILE
                </export-excel></button>
            </div>
            <div class="list-form mt-5 table-wrapper-scroll-y my-custom-scrollbar fixTableHead">
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
                            <th class="text-center" scope="col">Lớp</th>
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
                            <td class="text-center">{{ item.classStudent }}</td>
                            <td class="text-center">{{ item.major }}</td>
                            <td class="text-center">{{ item.course }}</td>
                            <td class="text-center">{{ `${new Date(item.created).getHours().toString().padStart(2,
                                '0')}:${new
                                    Date(item.created).getMinutes().toString().padStart(2, '0')}
                                                            ${item.created.toString().slice(0,
                                        10)}` }}</td>
                            <td class="text-center" style="color: red;text-align: center;font-weight: bold;">{{ item.result
                            }}</td>
                            <td class="text-center"><button type="button" class="btn btn-outline-success p-2"
                                    data-bs-toggle="modal" data-bs-target="#ViewDetailModal" @click="viewDetail(item.id)"><i
                                        class="bi bi-eye-fill"></i> Xem chi tiết</button></td>
                        </tr>
                    </tbody>
                </table>
                <template v-if="form.length == 0">
                    <strong style="margin-left: 550px;font-size: 20px;color: red;">Không tìm thấy danh sách sinh
                        viên</strong>
                </template>
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
        this.showSpell()
        this.getClass()
    },
    data() {
        return {
            form: [],
            passData: {},
            choose: 'Tất cả đơn',
            spell: [],
            classStudent: [],
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
                        username: item.studentId?.username,
                        name: item.studentId?.name,
                        classStudent: item.classStudent,
                        major: item.major,
                        course: item.course,
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
                        username: item.studentId?.username,
                        name: item.studentId?.name,
                        classStudent: item.classStudent,
                        major: item.major,
                        course: item.course,
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
                    status: item.status ? 'Bắt đầu' : 'Kết thúc',
                    allocate: item.allocate,
                    structure: item.structure
                }


            })

            this.spell = arr_result;

        },
        async getClass(major_input) {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/ministry/get-class",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )


            const arr_data = data.data.result;
            const arr_result = []
            arr_data.forEach((item, index) => {
                if (item != undefined && item.major == major_input) {
                    const ob = {
                        id: item._id,
                        stt: index + 1,
                        classStudent: item.classStudent
                    }
                    arr_result.push(ob)
                } else if (item != undefined && major_input == 'Tất cả') {
                    const ob = {
                        id: item._id,
                        stt: index + 1,
                        classStudent: item.classStudent
                    }
                    arr_result.push(ob)
                } else if (item != undefined && major_input == '') {
                    const ob = {
                        id: item._id,
                        stt: index + 1,
                        classStudent: item.classStudent
                    }
                    arr_result.push(ob)
                }

            })

            const arr_class_student = arr_result.map((item) => item.classStudent)

            const arr_result_new = arr_class_student.filter((item, index) => {
                return arr_class_student.indexOf(item) == index
            })

            const arr_result_final = arr_result_new.map((item) => {
                const ob = {
                    classStudent: item
                }
                return ob;
            }
            )



            this.classStudent = arr_result_final;
        },
        changeMajor(event) {
            this.selected = event.target.value
            this.getClass(this.selected)
        },
        async resetAll() {
            document.querySelector("#spell").value = 'Tất cả'
            document.querySelector("#course").value = 'Tất cả'
            document.querySelector("#major").value = 'Tất cả'
            document.querySelector("#classStudent").value = 'Tất cả'

        },
        async searchInfo() {
            const token = localStorage.getItem("token");
            // const data1 = await axios.get("http://localhost:3000/ministry/get-form", {
            //     headers: {
            //         Authorization: "Bearer " + token,
            //     }
            // })

            // var data_form = data1.data.arr
            var arr_result = []

            //Khu vực lọc dữ liệu
            let spell_filter = document.querySelector("#spell").value
            let course_filter = document.querySelector("#course").value
            let major_filter = document.querySelector("#major").value
            let classStudent_filter = document.querySelector("#classStudent").value

            //Kiểm tra dl 'tất cả'
            const ob = {}
            spell_filter != "Tất cả" ? ob.spellname = spell_filter : ''
            course_filter != "Tất cả" ? ob.course = course_filter : ''
            major_filter != "Tất cả" ? ob.major = major_filter : ''
            classStudent_filter != "Tất cả" ? ob.classStudent = classStudent_filter : ''



            await axios.post("http://localhost:3000/ministry/find-form",
                {
                    ob
                }
                , {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                }).then((data) => {
                    data.data.forEach((item, index) => {
                        let ob = {
                            stt: index + 1,
                            id: item._id,
                            username: item.username,
                            name: item.name,
                            classStudent: item.classStudent,
                            major: item.major,
                            course: item.course,
                            result: item.result,
                            spellname: item.spellname,
                            standard: item.standard,
                            created: item.createdAt
                        }
                        arr_result.push(ob)
                    })
                    this.form = arr_result;
                }).catch((e) => {
                    console.log(e)
                })

        },
        async SearchForm() {
            var arr_result = []
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:3000/ministry/search-form",
                {
                    searchForm: document.querySelector('.search-form').value
                }
                , {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                }).then((data) => {
                    data.data.forEach((item, index) => {
                        let ob = {
                            stt: index + 1,
                            id: item._id,
                            username: item.username,
                            name: item.name,
                            classStudent: item.classStudent,
                            major: item.major,
                            course: item.course,
                            result: item.result,
                            spellname: item.spellname,
                            standard: item.standard,
                            created: item.createdAt
                        }
                        arr_result.push(ob)
                    })
                    this.form = arr_result;
                }).catch((e) => {
                    console.log(e)
                })
        },
    }
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
