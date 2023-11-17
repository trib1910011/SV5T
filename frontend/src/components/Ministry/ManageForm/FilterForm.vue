<template>
    <div class="modal fade" id="FilterForm" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Bộ lọc đơn
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text"><strong>Họ tên</strong></span>
                        <input type="text" class="form-control" placeholder="Nhập tên/mã sinh viên" aria-label="Username"
                            aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id=""><strong>Đợt</strong></span>
                        <select id="spell" class="form-select col-9" aria-label="Default select example">
                            <option selected value="">Tất cả</option>
                            <option v-bind:value="item.name" v-for="(item, index) in spell" :key="index">{{ item.name }}
                            </option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id=""><strong>Khóa</strong></span>
                        <select id="course" class="form-select col-9" aria-label="Default select example" >
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
                        <select id="major" class="form-select col-9" aria-label="Default select example" @click="changeMajor($event)" >
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
                            <option selected value="">Tất cả</option>
                            <option v-bind:value="item.classStudent" v-for="(item, index) in classStudent" :key="index">{{
                                item.classStudent }}</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id=""><strong>Từ ngày</strong></span>
                        <input type="date" class="form-control" id="inputDatestart" name="start" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id=""><strong>Đến ngày</strong></span>
                        <input type="date" class="form-control" id="inputDatestart" name="start" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="resetAll()">
                        <i class="bi bi-arrow-counterclockwise"></i>Đặt lại
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="searchInfo()">
                        <i class="bi bi-search"></i>Tìm kiếm
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "FilterForm",
    data() {
        return {
            spell: [],
            classStudent: [],
        };
    },
    created() {
        this.showSpell()
        this.getClass()
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
                if (item != undefined && item.major == major_input ) {
                    const ob = {
                        id: item._id,
                        stt: index + 1,
                        classStudent: item.classStudent
                    }
                    arr_result.push(ob)
                } else if(item != undefined  && major_input == 'Tất cả'  ){
                    const ob = {
                        id: item._id,
                        stt: index + 1,
                        classStudent: item.classStudent
                    }
                    arr_result.push(ob)
                } else if(item != undefined && major_input == ''  ){
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
        resetAll(){

        },
        async searchInfo(){
            const token = localStorage.getItem("token");
            const data1 = await axios.get("http://localhost:3000/ministry/get-form", {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })

            const data_form = data1.data.arr
            const arr_result = []
            data_form.forEach((item, index) => {
                    let ob = {
                        stt: index + 1,
                        id: item._id,
                        username: item.studentId?.username,
                        name: item.studentId?.name,
                        classStudent: item.classStudent,
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
                })

            this.form = arr_result;
        }
    }
};
</script>

<style scoped>
.modal-header {
    background-color: #00b0f0;
}

.fullName {
    outline: 0;
    border-width: 0 0 2px;
    border-color: blue;
}

.fullName:focus {
    border-color: green;
}
</style>
