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
                                    <tr>

                                        <th scope="row"></th>
                                        <template v-for="fruit in dataParent.structure" :key="fruit.id">
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
                                        <template v-for="fruit in dataParent.structure" :key="fruit.id">
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
                                        <template v-for="fruit in dataParent.structure" :key="fruit.id">
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
                                        <template v-for="fruit in dataParent.structure" :key="fruit.id">
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
                                        <template v-for="fruit in dataParent.structure" :key="fruit.id">
                                            <template v-if="fruit.split('-')[0] == 'HN'">
                                                - {{ fruit.split("-")[1] }} <br>
                                            </template>


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
// import axios from "axios";
export default {
    props: ['dataParent'],
    name: "ViewStandard",
    data() {
        return {
            passData: {},
            structure: [],
        };
    },
}    
</script>

<style scoped>
.table-assess {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style> 
