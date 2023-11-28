<template>
    <div
        class="modal fade"
        id="editInforStandard"
        aria-labelledby="modalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Chỉnh sửa chi tiết tiêu chí
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
                                    for="inputcodeStandard"
                                    class="col-form-label px-0"
                                    ><strong>Mã chi tiết tiêu chí</strong></label
                                >
                                <div class="form-control"
                                    id="codeStandard">
                                    {{ standardUpdate.codeStandard }}
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputcategoryName"
                                    class="col-form-label px-0"
                                    ><strong>Thuộc tiêu chí:</strong></label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputcategoryName"
                                    name="categoryName"
                                    v-model="standardUpdate.categoryName"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputcodeStandard"
                                    class="col-form-label px-0"
                                    ><strong>Nội dung chi tiết tiêu chí</strong></label
                                >
                                
                                <textarea type="text" 
                                class="form-control" 
                                id="inputcontentStandard" 
                                name="contentStandard"
                                v-model="standardUpdate.contentStandard" cols="30" rows="5"></textarea>
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
                        @click="handleUpdateStandard"
                        data-bs-dismiss="modal"
                        
                    >
                        Lưu thay đổi
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
    name: "EditStandard",
    methods: {
        async handleUpdateStandard() {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.patch(  
                    `${config.domain}/ministry/update-standard`,
                    {
                        standardId: this.standardUpdate.id,
                        codeStandard: this.standardUpdate.codeStandard.trim(),
                        categoryName: this.standardUpdate.categoryName,
                        contentStandard: this.standardUpdate.contentStandard.trim(),
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
        standardUpdate: "getStandardUpdate",
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
