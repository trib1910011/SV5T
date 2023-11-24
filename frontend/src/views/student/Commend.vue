<template>
    <TitleStructure title="Danh sách sinh viên 5 tốt"></TitleStructure>
    <div style="display: flex;">
        <select class="form-select select-type-spell"
            style="width: 100px;margin-left: 30px;border: solid green;background-color: yellowgreen;font-weight: bold;"
            @click="SelectSpell">
            <option value="Tất cả" selected style="font-weight: bold;">Tất cả</option>
            <option v-for="(item) in spell" v-bind:value="item.name" :key="item" style="font-weight: bold;">
                {{ item.name }}
            </option>
        </select>
    </div>
    <div class="input-group mb-3 mt-3" style="width: 400px;margin-left: 800px;">
        <span class="input-group-text"><strong>Tìm kiếm</strong></span>
        <input type="text" class="form-control search-form" placeholder="Nhập tên/mã sinh viên" aria-label="Username"
            aria-describedby="basic-addon1">
        <button type="button" class="btn btn-primary" @click="SearchForm">
            <i class="bi bi-search"></i>
        </button>
    </div>
    <div style="flex-wrap: wrap; display: flex;">
        <template v-for="(item, index) in form" :key="index">
            <div class="d-flex col-3 rounded-5 mt-3 mx-5"
                style="justify-content: center;border: 3px solid green;background-color: rgb(204, 246, 242);">
                <div data-bs-toggle="modal" data-bs-target="#ViewCommendModal" @click="viewDetail(item.id)">
                    <div
                        style="border: 2px solid green;background-color: yellowgreen;width: 60px;height: 60px;border-radius: 50%;text-align: center;padding-top: 17px;font-weight: bold;">
                        {{ item.spellname }}
                    </div>
                    <img :src="item.urlAvatar"
                        style="width: 150px;height: 150px;margin-top: 5px;clip-path: circle(75px at 50% 50%);margin-left: 40px;">
                    <div
                        style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;color: blue;font-size: 20px;font-weight: bold;text-align: center;">
                        {{ item.name }}<br>
                        {{ item.username }}
                    </div>
                    <strong>Lớp: </strong> {{ item.classStudent }} <br>
                    <strong>Ngành: </strong> {{ item.major }} <br>
                    <strong>Khóa: </strong> {{ item.course }} <br>
                </div>
            </div>

        </template>
    </div>
    <ViewCommend v-bind:dataParent="passData"></ViewCommend>
</template>

<script>
import axios from "axios";
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";
import ViewCommend from "@/components/Student/Form/ViewCommend.vue";
export default {
    name: "CommendStudent",
    data() {
        return {
            form: [],
            spell: [],
            choose: 'Tất cả',
            passData: {}
        };
    },
    components: { TitleStructure, ViewCommend },
    created() {
        this.showForm()
        this.showSpell()
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
                    allocate: item.allocate,
                    status: item.status ? 'Bắt đầu' : 'Kết thúc'
                }
            })
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
                if (this.choose != "Tất cả") {
                    if (item.result == 'Đạt' && item.spellname == this.choose) {
                        let ob = {
                            stt: index + 1,
                            id: item._id,
                            username: item.studentId.username,
                            name: item.studentId.name,
                            urlAvatar: item.studentId.urlAvatar,
                            major: item.major,
                            course: item.course,
                            classStudent: item.classStudent,
                            drl: item.drl,
                            gpa: item.gpa,
                            result: item.result,
                            spellname: item.spellname,
                            standard: item.standard,
                            created: item.createdAt
                        }

                        arr_result.push(ob)
                    }
                } else {
                    if (item.result == 'Đạt') {
                        let ob = {
                            stt: index + 1,
                            id: item._id,
                            username: item.studentId.username,
                            name: item.studentId.name,
                            urlAvatar: item.studentId.urlAvatar,
                            major: item.major,
                            classStudent: item.classStudent,
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


            }

            )


            this.form = arr_result

        },
        SelectSpell() {
            const choose_item = document.querySelector(".select-type-spell").value
            this.choose = choose_item
            this.showForm()
        },
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
        async SearchForm() {
            var arr_result = []
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:3000/student/search-form",
                {
                    searchForm: document.querySelector('.search-form').value
                }
                , {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                }).then((data) => {
                    console.log(data.data)
                    data.data.forEach((item, index) => {
                        let ob = {
                            stt: index + 1,
                            id: item._id,
                            username: item.username,
                            name: item.name,
                            urlAvatar: item.urlAvatar,
                            classStudent: item.classStudent,
                            major: item.major,
                            course: item.course,
                            result: item.result,
                            spellname: item.spellname,
                            standard: item.standard,
                            created: item.created
                        }
                        arr_result.push(ob)
                    })
                    this.form = arr_result;
                }).catch((e) => {
                    console.log(e)
                })
        }
    }
};

</script>

<style scoped></style>
