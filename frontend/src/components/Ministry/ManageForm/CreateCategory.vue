<template>
    <div
        class="modal fade"
        id="createCategory"
        aria-labelledby="modalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Thêm loại tiêu chí
                    </h1>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form class="row p-3">
                        <div class="infor">
                            <div class="mb-3 row">
                                <label
                                    for="inputSpellname"
                                    class="col-form-label px-0"
                                    ><strong>Mã loại</strong></label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputcategoryCode"
                                    name="categoryCode"
                                    v-model="categoryCode"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputcategoryName"
                                    class="col-form-label px-0"
                                    ><strong>Tên loại tiêu chí:</strong></label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputcategoryName"
                                    name="categoryName"
                                    v-model="categoryName"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Đóng
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="handleCreateCategory"
                        data-bs-dismiss="modal"
                        :disabled="!categoryCode || !categoryName "
                    >
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
    name: "CreateCategory",
    data() {
        return {
            categoryCode: "",
            categoryName: "",
        };
    },
    methods: {
        async handleCreateCategory() {
            const token = localStorage.getItem("token");
            const res = await axios.post(
                `${config.domain}/ministry/create-category`,
                {
                    categoryCode: this.categoryCode.trim(),
                    categoryName: this.categoryName.trim(),
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
                this.$store.commit("ADD_CATEGORY_CURRENT", {
                    _id: res.data.newCategory._id,
                    categoryCode: this.categoryCode,
                    categoryName: this.categoryName,

                });
                this.categoryCode = '';
                this.categoryName = '';
            }
            this.$parent.showCategory()

        },
    },
};
</script>

<style scoped>
.modal-header {
    background-color: #00b0f0;
}

</style>
