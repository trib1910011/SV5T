<template>
    <div
        class="modal fade"
        id="editInforCategory"
        aria-labelledby="modalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Chỉnh sửa loại tiêu chí
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
                                    for="inputcategoryCode"
                                    class="col-form-label px-0"
                                    ><strong>Mã tiêu chí</strong></label
                                >
                                <div class="form-control"
                                    id="categoryCode">
                                    {{ categoryUpdate.categoryCode }}
                                </div>
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
                                    v-model="categoryUpdate.categoryName"
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
                        @click="handleUpdateCategory"
                        data-bs-dismiss="modal"
                        
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
import { mapGetters } from "vuex";
export default {
    name: "EditCategory",
    methods: {
        async handleUpdateCategory() {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.patch(  
                    `${config.domain}/ministry/update-category`,
                    {
                        categoryId: this.categoryUpdate.id,
                        categoryCode: this.categoryUpdate.categoryCode.trim(),
                        categoryName: this.categoryUpdate.categoryName.trim(),
                    },
                    { headers: { Authorization: "Bearer " + token } }
                   
                    
                );
                this.$store.commit("SET_TOAST", {
                    message: res.data.message,
                    isSuccess: res.data.status,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
    computed: mapGetters({
        categoryUpdate: "getCategoryUpdate",
    }),
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
