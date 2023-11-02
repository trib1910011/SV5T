<template>
    <TitleStructure title="Danh sách sinh viên 5 tốt"></TitleStructure>
    <select class="form-select select-type-spell" style="width: 100px;margin-left: 30px;border: solid green;"
        @click="SelectSpell">
        <option value="Tất cả" selected>Tất cả</option>
        <option v-for="(item) in spell" v-bind:value="item.name" :key="item">
            {{ item.name }}
        </option>
    </select>
    <div style="flex-wrap: wrap; display: flex;">
        <template v-for="(item, index) in form" :key="index">
            <div class="d-flex col-3  p-3 border border-success rounded-4 mt-3 mx-5" style="justify-content: center;">
                <div>
                    <AvatarComponent :urlAvatar="item.urlAvatar" />
                    <strong style="margin-top: 200px">MSSV: </strong> {{ item.username }} <br>
                    <strong>Họ và tên: </strong> {{ item.name }} <br>
                    <strong>Ngành: </strong> {{ item.major }} <br>
                    <strong>Khóa: </strong> {{ item.course }} <br>
                    <strong>Đợt: </strong> {{ item.spellname }}
                </div>
            </div>

        </template>
    </div>
</template>

<script>
import axios from "axios";
import AvatarComponent from "@/components/GlobalComponent/AvatarComponent.vue";
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";
export default {
    name: "CommendStudent",
    data() {
        return {
            form: [],
            spell: [],
            choose: 'Tất cả'
        };
    },
    components: { AvatarComponent, TitleStructure },
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
                    if (item.result == 'Đạt'){
                        let ob = {
                        stt: index + 1,
                        id: item._id,
                        username: item.studentId.username,
                        name: item.studentId.name,
                        urlAvatar: item.studentId.urlAvatar,
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
                    

            }

            )


            this.form = arr_result

        },
        SelectSpell() {
            const choose_item = document.querySelector(".select-type-spell").value
            this.choose = choose_item
            this.showForm()
        }
    }
};

</script>

<style scoped></style>
