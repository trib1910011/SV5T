<template>
    <div class="modal fade" id="createSpell" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Thêm đợt
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body" style="width: 100%;">
                    <form class="row p-3">
                        <div class="infor">
                            <div class="mb-3 row">
                                <label for="inputSpellname" class="col-form-label px-0"><strong>Mã đợt:</strong></label>
                                <input type="text" class="form-control" id="inputSpellname" name="spellname"
                                    v-model="spellname" />
                            </div>
                            <div class="mb-3 row">
                                <label for="inputName" class="col-form-label px-0"><strong>Tên đợt:</strong></label>
                                <input type="text" class="form-control" id="inputName" name="name" v-model="name" />
                            </div>
                            <div class="mb-3 row">
                                <label for="inputDatestart" class="col-form-label px-0"><strong>Ngày bắt
                                        đầu:</strong></label>
                                <input type="date" class="form-control" id="inputDatestart" name="start" v-model="start" />
                            </div>
                            <div class="mb-3 row">
                                <label for="inputDateend" class="col-form-label px-0"><strong>Ngày kết
                                        thúc:</strong></label>
                                <input type="date" class="form-control" id="inputDateend" name="end" v-model="end" />
                            </div>
                            <div class="mb-3 row">
                                <label for="inputAllocate" class="col-form-label px-0"><strong>Phân công xét duyệt:
                                    </strong></label>
                                <div style="border: 1px solid rgb(191, 188, 188);padding: 2px; border-radius: 5px;">
                                    <div v-for="(item, index) in account" :key="index">
                                        <template v-if="item.rule == 'TEACHER'">
                                            <input class="allocate" type="checkbox" name="check" id="check"
                                                v-bind:data-allocate="(`${item.name}`)" style="height: 20px;width: 20px;">
                                            {{ item.name }}
                                        </template>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                    <strong style="margin-left: 286px;">CẤU TRÚC ĐƠN XÉT SINH VIÊN 5 TỐT </strong>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="col-1">STT</th>
                                <th scope="col" class="col-10">Tiêu chí đánh giá</th>
                                <th scope="col" class="col-1">Thêm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">I</th>
                                <td style="font-weight: bold">Đạo đức tốt</td>
                            </tr>
                            <tr v-for="(item, index) in standards" :key="index">
                                <template v-if="item.categoryName == 'Đạo đức tốt' && item.status == 'Hiện'">
                                    <th scope="row"></th>
                                    <td>{{ item.contentStandard }}</td>
                                    <td><input type="checkbox" style="height: 20px;width: 20px;" class="standard_check_box"
                                            v-bind:data-structure="(`DD${item.contentStandard}`)"></td>
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
                            </tr>
                            <tr v-for="(item, index) in standards" :key="index">
                                <template v-if="item.categoryName == 'Học tập tốt' && item.status == 'Hiện'">
                                    <th scope="row"></th>
                                    <td>{{ item.contentStandard }}</td>
                                    <td><input type="checkbox" style="height: 20px;width: 20px;" class="standard_check_box"
                                            v-bind:data-structure="(`HT${item.contentStandard}`)"></td>
                                </template>

                            </tr>
                            <tr>
                                <th scope="row">III</th>
                                <td style="font-weight: bold">Thể lực tốt</td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                            </tr>
                            <tr v-for="(item, index) in standards" :key="index">
                                <template v-if="item.categoryName == 'Thể lực tốt' && item.status == 'Hiện'">
                                    <th scope="row"></th>
                                    <td>{{ item.contentStandard }}</td>
                                    <td><input type="checkbox" style="height: 20px;width: 20px;" class="standard_check_box"
                                            v-bind:data-structure="(`TL${item.contentStandard}`)"></td>
                                </template>

                            </tr>
                            <tr>
                                <th scope="row">IV</th>
                                <td style="font-weight: bold">Tình nguyện tốt</td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                            </tr>
                            <tr v-for="(item, index) in standards" :key="index">
                                <template v-if="item.categoryName == 'Tình nguyện tốt' && item.status == 'Hiện'">
                                    <th scope="row"></th>
                                    <td>{{ item.contentStandard }}</td>
                                    <td><input type="checkbox" style="height: 20px;width: 20px;" class="standard_check_box"
                                            v-bind:data-structure="(`TN${item.contentStandard}`)"></td>
                                </template>

                            </tr>
                            <tr>
                                <th scope="row">V</th>
                                <td style="font-weight: bold">Hội nhập tốt</td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                            </tr>
                            <tr v-for="(item, index) in standards" :key="index">
                                <template v-if="item.categoryName == 'Hội nhập tốt' && item.status == 'Hiện'">
                                    <th scope="row"></th>
                                    <td>{{ item.contentStandard }}</td>
                                    <td><input type="checkbox" style="height: 20px;width: 20px;" class="standard_check_box"
                                            v-bind:data-structure="(`HN${item.contentStandard}`)"></td>
                                </template>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" @click="handleCreateSpell" data-bs-dismiss="modal"
                        :disabled="!spellname || !name || !start || !end">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index";
export default {
    name: "CreateSpell",
    data() {
        return {
            spellname: "",
            name: "",
            start: "",
            end: "",
            status: true,
            account: [],
            standards: [],
        };
    },
    created() {
        this.getAllAccount(),
            this.getStandard()
    },
    methods: {
        async handleCreateSpell() {
            var arr_teacher = []
            let DOM_Checkbox_teacher = document.querySelectorAll(".allocate");

            DOM_Checkbox_teacher.forEach((item) => {
                if (item.checked) {
                    arr_teacher.push(item.dataset.allocate)
                }
            })
            var arr_structure = []
            let DOM_Checkbox_structure = document.querySelectorAll(".standard_check_box");

            DOM_Checkbox_structure.forEach((item) => {
                if (item.checked) {
                    arr_structure.push(item.dataset.structure)
                }
            })
            const res = await axios.post(
                `${config.domain}/spell/create-spell`,
                {
                    spellname: this.spellname.trim(),
                    name: this.name.trim(),
                    start: this.start,
                    end: this.end,
                    status: this.status,
                    allocate: arr_teacher,
                    structure: arr_structure
                },
            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("ADD_SPELL_CURRENT", {
                    _id: res.data.newSpell._id,
                    spellname: this.spellname,
                    name: this.name,
                    start: this.start,
                    end: this.end,
                    status: this.status,
                    allocate: arr_teacher,
                    structure: arr_structure

                });
                this.spellname = '';
                this.name = '';
                this.start = '';
                this.end = '';
                DOM_Checkbox_teacher.forEach((item) => {
                    item.checked = false
                })
                DOM_Checkbox_structure.forEach((item) => {
                    item.checked = false
                })
            }
            this.$parent.showSpell()

        },
        async getAllAccount() {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/ministry/get-all-account",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )


            const arr_data = data.data.result;
            const arr_result = arr_data.map((item, index) => {

                return {
                    id: item._id,
                    stt: index + 1,
                    rule: item.rule,
                    name: item.name
                }

            })
            this.account = arr_result;
        },
        async getStandard() {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/ministry/get-standard",
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
    },
};
</script>

<style scoped>
.modal-header {
    background-color: #00b0f0;
    width: 900px;
}

.modal-content {
    width: 900px;
}

.modal-dialog {
    margin-left: 296px;
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
