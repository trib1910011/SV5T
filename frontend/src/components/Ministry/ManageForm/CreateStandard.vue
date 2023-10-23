<template>
    <div class="modal fade" id="createStandard" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Thêm chi tiết tiêu chí
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row p-3">
                        <div class="infor">
                            <div class="mb-3 row">
                                <label for="inputcodeStandard" class="col-form-label px-0"><strong>Mã chi
                                        tiết:</strong></label>
                                <input type="text" class="form-control" id="inputcodeStandard" name="codeStandard"
                                    v-model="codeStandard" />
                            </div>
                            <div class="mb-3 row">
                                <label for="input" class="col-form-label px-0"><strong>Thuộc tiêu chí:</strong></label>
                                <select class="form-select select-type-category" @change="changeStandard($event)">
                                    <option v-for="(item) in categories" selected v-bind:value="item.categoryName" :key="item">
                                        {{ item.categoryName }}
                                    </option>
                                </select>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputcontentStandard" class="col-form-label px-0"><strong>Nội dung tiêu
                                        chí:</strong></label>
                                <textarea type="text" class="form-control" id="inputcontentStandard" name="contentStandard"
                                    v-model="contentStandard" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" @click="handleCreateStandard" data-bs-dismiss="modal"
                        :disabled="!codeStandard || !contentStandard">
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
    name: "CreateStandard",
    data() {
        return {
            categories: [],
            codeStandard: "",
            contentStandard: "",
            selected: "Đạo đức tốt"
        };
    },
    created() {
        this.getCategory()
    },
    methods: {
        async handleCreateStandard() {
        
            const token = localStorage.getItem("token");
            const res = await axios.post(
                `${config.domain}/ministry/create-standard`,
                {
                    codeStandard: this.codeStandard.trim(),
                    categoryName: this.selected,
                    contentStandard: this.contentStandard.trim(),
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            console.log(res)
            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("ADD_STANDARD_CURRENT", {
                    _id: res.data.newStandard._id,
                    codeStandard: this.codeStandard,
                    categoryName: this.selected,
                    nameStandard: this.nameStandard,
                });
                this.codeStandard = '';
                this.contentStandard = '';
            }
            this.$parent.showStandard()

        },
        async getCategory() {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/ministry/get-all-categories",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            const arr_data = data.data.categories;

            const arr_result = arr_data.map((item) => {

                return {
                    categoryName: item.categoryName
                }


            })

            this.categories = arr_result;

        },
        changeStandard(event) {
            this.selected = event.target.value
        }

    },


};
</script>

<style scoped>
.modal-header {
    background-color: #00b0f0;
}
</style>
