<template>
    <div class="modal fade" id="createAccount" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Thêm tài khoản
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row p-3">
                        <div class="infor">
                            <div class="mb-3 row">
                                <label for="inputName" class="col-form-label px-0"><strong>Tên đầy đủ:</strong></label>
                                <input type="text" class="form-control" id="inputName" name="name" v-model="name" />
                            </div>
                            <div class="mb-3 row">
                                <label for="inputUsername" class="col-form-label px-0"><strong>Tên đăng
                                        nhập:</strong></label>
                                <input type="text" class="form-control" id="inputUsername" name="username"
                                    v-model="username" />
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-form-label px-0"><strong>Mật khẩu:</strong></label>
                                <input type="password" class="form-control" id="inputPassword" name="password"
                                    v-model="password" />
                            </div>
                            <div class="mb-3 row">
                                <label for="inputTypeAccount" class="col-form-label px-0"><strong>Loại tài
                                        khoản:</strong></label>
                                <select class="form-select select-type-account" aria-label="Select Type Account"
                                    id="inputTypeAccount" name="typeAccount" @change="selectTypeAccount($event)"
                                    v-model="typeAccount">
                                    <option selected value="TEACHER">
                                        Giảng viên
                                    </option>
                                    <option value="STUDENT">Sinh viên</option>
                                    <option value="MINISTRY">Giám sát</option>
                                </select>
                            </div>
                            <div class="mb-3 row px-0 justify-content-between student-info d-none">
                                <div class="student-major col-8 p-0">
                                    <label for="inputMajor" class="col-form-label px-0"><strong>Ngành:</strong></label>
                                    <select class="form-select select-major" aria-label="Select Major" id="inputMajor"
                                        name="major" v-model="major">
                                        <option selected value="Công nghệ thông tin">Công nghệ thông tin</option>
                                        <option value="Truyền thông đa phương tiện">Truyền thông đa phương tiện</option>
                                        <option value="An toàn thông tin">An toàn thông tin</option>
                                        <option value="Khoa học máy tính">Khoa học máy tính</option>
                                        <option value="Kỹ thuật máy tính">Kỹ thuật máy tính</option>
                                        <option value="Mạng máy tính và truyền thông dữ liệu">Mạng máy tính và truyền thông dữ liệu</option>
                                        <option value="Kỹ thuật phần mềm">Kỹ thuật phần mềm</option>
                                        <option value="Hệ thống thông tin">Hệ thống thông tin</option>
                                    </select>
                                </div>
                                <div class="course col-3 p-0">
                                    <label for="inputCourse" class="col-form-label px-0"><strong>Khóa:</strong></label>
                                    <select class="form-select select-course" aria-label="Select Course" id="inputCourse"
                                        name="course" v-model="course">
                                        <option selected value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                    </select>
                                </div>
                                <div class="student-class col-6 p-0">
                                    <label for="inputClass" class="col-form-label px-0"><strong>Lớp:</strong></label>
                                    <input type="text" class="form-control" id="class" name="major" v-model="classStudent" />
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <div v-if="typeAccount === 'TEACHER' || typeAccount === 'MINISTRY'">
                        <button type="button" class="btn btn-primary" @click="handleCreateAccount" data-bs-dismiss="modal"
                        :disabled="!username || !password || !name || !typeAccount">
                        Xác nhận
                    </button>
                    </div>
                    <div v-else>
                        <button type="button" class="btn btn-primary" @click="handleCreateAccount" data-bs-dismiss="modal"
                        :disabled="!username || !password || !name || !typeAccount ||!major ||!classStudent">
                        Xác nhận
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index";

export default {
    name: "CreateAccount",
    data() {
        return {
            username: "",
            password: "",
            name: "",
            typeAccount: "TEACHER",
            major: "Công nghệ thông tin",
            classStudent: "",
            course: "45",
        };
    },
    methods: {
        selectTypeAccount(event) {
            const type = event.target.value;
            const major = document.querySelector(".student-info");
            if (type == "STUDENT") {
                major.classList.remove("d-none");
            } else {
                if (!major.classList.contains("d-none"))
                    major.classList.add("d-none");
            }
        },
        async handleCreateAccount() {
            const token = localStorage.getItem("token");

            const res = await axios.post(
                `${config.domain}/admin/create-account`,
                {
                    username: this.username.trim(),
                    password: this.password.trim(),
                    name: this.name.trim(),
                    typeAccount: this.typeAccount,
                    classStudent: this.classStudent,
                    major: this.major.trim(),
                    course: this.course,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("ADD_ACCOUNT_CURRENT", {
                    _id: res.data.newAccount._id,
                    username: this.username,
                    name: this.name,
                    rule: this.typeAccount,
                });
                this.username = '';
                this.password = '';
                this.name = '';
                this.major = '';
                this.classStudent= '';
            }


        },
    },
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
