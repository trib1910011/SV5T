<template>
    <div class="assess-result">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="ViewStandard" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="min-width: 800px !important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold" id="ModalLabel" style="text-align: center;width: 100%;">
                            TIÊU CHÍ ĐÁNH GIÁ
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="cancelForm"></button>
                    </div>
                    <div class="modal-body">
                        <div class="table-assess d-flex">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="col-1">STT</th>
                                        <th scope="col" class="col-10">Tiêu chí cần đạt</th>
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
                                        <td>Đạt 1 trong các tiêu chuẩn sau:</td>
                                    </tr>
                                    <tr v-for="(item, index) in standards" :key="index">
                                        <template v-if="item.categoryName == 'Học tập tốt' && item.status == 'Hiện'">
                                            <th scope="row"></th>
                                            <td>{{ item.contentStandard }}</td>
                                        </template>

                                    </tr>
                                    <tr>
                                        <th scope="row">III</th>
                                        <td style="font-weight: bold">Thể lực tốt</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Đạt 1 trong các tiêu chuẩn sau:</td>
                                    </tr>
                                    <tr v-for="(item, index) in standards" :key="index">
                                        <template v-if="item.categoryName == 'Thể lực tốt' && item.status == 'Hiện'">
                                            <th scope="row"></th>
                                            <td>{{ item.contentStandard }}</td>
                                        </template>

                                    </tr>
                                    <tr>
                                        <th scope="row">IV</th>
                                        <td style="font-weight: bold">Tình nguyện tốt</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Đạt 1 trong các tiêu chuẩn sau:</td>
                                    </tr>
                                    <tr v-for="(item, index) in standards" :key="index">
                                        <template v-if="item.categoryName == 'Tình nguyện tốt' && item.status == 'Hiện'">
                                            <th scope="row"></th>
                                            <td>{{ item.contentStandard }}</td>
                                        </template>

                                    </tr>
                                    <tr>
                                        <th scope="row">V</th>
                                        <td style="font-weight: bold">Hội nhập tốt</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>Đạt 2 trong 3 tiêu chuẩn sau:</td>
                                    </tr>
                                    <tr v-for="(item, index) in standards" :key="index">
                                        <template v-if="item.categoryName == 'Hội nhập tốt' && item.status == 'Hiện'">
                                            <th scope="row"></th>
                                            <td>{{ item.contentStandard }}</td>
                                        </template>

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
import axios from "axios";
export default {
    name: "ViewStandard",

    data() {
        return {
            standards: [],
        };
    },
    created() {
        this.getStandard()
    },
    methods: {
        async getStandard() {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/teacher/get-standard",
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

            console.log(arr_result)

            this.standards = arr_result;
        },

    }


};
</script>

<style scoped>
.table-assess {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style> 
