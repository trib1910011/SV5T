<template>
    <div class="assess-result">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="ViewDetailModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
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
                            <!-- <template v-for="(item, index) in form" :key="index"> -->
                            <!-- <strong>HỌ VÀ TÊN: </strong> <br>
                            <strong>MSSV: </strong> <br>
                            <strong>NGÀNH: </strong> <br>
                            <strong>KHÓA: </strong> <br>
                            <strong>ĐỢT: </strong> -->
                            <!-- </template> -->
                            <div>
                                <strong>GPA: {{ dataParent.gpa }}</strong>
                            </div>
                            <div>
                                <strong>ĐIỂM RÈN LUYỆN: {{ dataParent.drl }}</strong>

                            </div>
                        </div>
                        <!-- <div class="col-6 mt-3">
                            <div>
                                <strong>GPA: {{dataForm.gpa}}</strong>
                            </div>
                            <div>
                                <strong>ĐIỂM RÈN LUYỆN: </strong>

                            </div>
                        </div> -->
                    </div>
                    <div class="modal-body">
                        <div class="table-assess d-flex">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="col-1">STT</th>
                                        <th scope="col" class="col-10">Tiêu chí đã đạt được</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">I</th>
                                        <td style="font-weight: bold">Đạo đức tốt</td>
                                    </tr>
                                    <tr>

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'DD'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


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
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'HT'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr>
                                        <th scope="row">III</th>
                                        <td style="font-weight: bold">Thể lực tốt</td>
                                    </tr>
                                    <tr>

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'TL'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr>
                                        <th scope="row">IV</th>
                                        <td style="font-weight: bold">Tình nguyện tốt</td>
                                    </tr>
                                    <tr>

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'TN'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr>
                                        <th scope="row">V</th>
                                        <td style="font-weight: bold">Hội nhập tốt</td>
                                    </tr>
                                    <tr>

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'HN'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td style="font-weight: bold">Các hoạt động tiêu biểu khác:</td><br>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>
                                            <pre>{{ dataParent.more }}</pre>
                                        </td>
                                    </tr>
                                    <tr>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div v-if="st.rule == 'TEACHER' && this.checkShowDOM == true" class="modal-footer"
                        style="justify-content: center;width: 100%;">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            @click="UpdateForm(dataParent._id, st.id, 'Đạt')">
                            Đạt
                        </button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" 
                            @click="UpdateForm(dataParent._id, st.id, 'Chưa đạt')">
                            Chưa đạt
                        </button>
                        

                    </div>
                    <div v-else-if="st.rule == 'TEACHER' && this.checkShowDOM == false" class="modal-footer"
                        style="justify-content: center;width: 100%;">
                        <td style="font-weight: bold;">Đã duyệt</td>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import config from "@/config";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
    props: ['dataParent'],
    // setup(props) {
    //     // setup() receives props as the first argument.
    //     console.log(props.dataParent)
    // },
    name: "ViewDetail",
    data() {
        return {
            passData: {},
            standard: [],
            checkShowDOM: true,
        };
    },
    created() {
        this.viewDetail()
        // this.viewData(this.dataParent)
    },
    methods: {
        // viewData: (dataParent) => {
        //     setTimeout(() => {

        //         console.log(dataParent)
        //     }, 5000)
        // },
        async UpdateForm(id_input, id_teacher, check) {
            const token = localStorage.getItem("token");
            const res = await axios.patch(`http://localhost:3000/teacher/update-form/${id_input}`,
                {
                    check: `${id_teacher}-${check}`
                },
                {
                    headers: { Authorization: "Bearer " + token },
                },
                
            )
            
            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            })
        },
        viewDetail() {
            try {
                let data = JSON.parse(localStorage.getItem('view_detail_form'))
                if (data) {
                    const checkShow = data.id_teacher;

                    const countCheckShow = data.data.count_check

                    const arr_new = countCheckShow.map((item) => {
                        return item.split("-")[0]
                    })

                    const check = arr_new.includes(checkShow)

                    check ? this.checkShowDOM = false : this.checkShowDOM = true
                }
            } catch (e) {
                console.log(e)
            }

            
        },
    },

    computed: {
        ...mapGetters({ st: "getAccount" }),



    },






};
</script>

<style scoped>
.table-assess {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style> 
