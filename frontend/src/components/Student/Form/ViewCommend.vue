<template>
    <div class="assess-result">
        <div class="modal fade" id="ViewCommendModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="min-width: 800px !important;">
                <div class="modal-content">
                    <div class="modal-header" style="background-color: rgb(204, 246, 242);">
                        
                        <h2 class="modal-title fw-bold" id="ModalLabel" style="text-align: center;width: 100%;color:#00b6db">
                            
                            <img src="/ctu.png" alt="" srcset="" style="height: 80px;width: 80px;">THÀNH TÍCH ĐẠT ĐƯỢC
                        </h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="cancelForm"></button>
                    </div>

                    <div class="modal-body">
                        <div class="table-assess d-flex">
                            <table class="table">
                                <thead>
                                    
                                </thead>
                                <tbody>
                                    <tr style="background-color: white;border: solid white;">
                                        <th scope="row"><img src="/daoductot.png" alt="" srcset="" style="width: 50px;height: 50px;"></th>
                                        <td style="font-weight: bold;font-size: 25px;color:#00b6db;padding-top: 15px;">Đạo đức tốt</td>
                                    </tr>
                                    <tr style="border: solid rgb(204, 246, 242);background-color: rgb(204, 246, 242);font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'DD'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr style="background-color: white;border: solid white;">
                                        <th scope="row"><img src="/hoctaptot.png" alt="" srcset="" style="width: 50px;height: 50px;"></th>
                                        <td style="font-weight: bold;font-size: 25px;color:#00b6db;padding-top: 15px;">
                                            Học tập tốt
                                        </td>
                                    </tr>
                                    <tr style="border: solid rgb(204, 246, 242);background-color: rgb(204, 246, 242);font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'HT'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr style="background-color: white;border: solid white;">
                                        <th scope="row"><img src="/theluctot.png" alt="" srcset="" style="width: 50px;height: 50px;"></th>
                                        <td style="font-weight: bold;font-size: 25px;color:#00b6db;padding-top: 15px;">Thể lực tốt</td>
                                    </tr>
                                    <tr style="border: solid rgb(204, 246, 242);background-color: rgb(204, 246, 242);font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'TL'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr style="background-color: white;border: solid white;">
                                        <th scope="row"><img src="/tinhnguyentot.png" alt="" srcset="" style="width: 50px;height: 50px;"></th>
                                        <td style="font-weight: bold;font-size: 25px;color:#00b6db;padding-top: 15px;">Tình nguyện tốt</td>
                                    </tr>
                                    <tr style="border: solid rgb(204, 246, 242);background-color: rgb(204, 246, 242);font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'TN'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr style="background-color: white;border: solid white;">
                                        <th scope="row"><img src="/hoinhaptot.png" alt="" srcset="" style="width: 50px;height: 50px;"></th>
                                        <td style="font-weight: bold;font-size: 25px;color:#00b6db;padding-top: 15px;">Hội nhập tốt</td>
                                    </tr>
                                    <tr style="border: solid rgb(204, 246, 242);background-color: rgb(204, 246, 242);font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.standard" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'HN'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


                                        </template>
                                    </tr>
                                    <tr style="background-color: white;border: solid white;">
                                        <th scope="row"><img src="/hoatdong.png" alt="" srcset="" style="width: 50px;height: 50px;"></th>
                                        <td style="font-weight: bold;font-size: 25px;color:#00b6db;padding-top: 15px;">Các hoạt động tiêu biểu khác</td><br>
                                    </tr>
                                    <tr style="border: solid rgb(204, 246, 242);background-color: rgb(204, 246, 242);font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import config from "@/config";
// import axios from "axios";
// import { mapGetters } from "vuex";
export default {
    props: ['dataParent'],
    name: "ViewCommend",
    data() {
        return {
            passData: {},
            standard: [],
            checkShowDOM: true,
            form: []
        };
    },
    created() {
        setTimeout(() => {

            this.viewDetail()
        }, 5000)
        
    },
    mounted() {
        setInterval(() => {
            this.viewDetail()

        }, 100)
    },
    methods: {
        viewDetail() {
            try {
                let data = JSON.parse(localStorage.getItem('view_detail_form'))
                console.log(data)
                if (data) {
                    const checkShow = data.id_teacher;

                    const countCheckShow = data.data.count_check

                    const arr_new = countCheckShow.map((item) => {
                        return item.split("-")[0]
                    })

                    const check = arr_new.includes(checkShow)

                    console.log(check)
                    check ? this.checkShowDOM = false : this.checkShowDOM = true
                }
            } catch (e) {
                console.log(e)
            }


        },
    },


};
</script>

<style scoped>
.table-assess {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style> 
