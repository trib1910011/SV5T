<template>
    <div class="modal fade" id="importAccount" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Thêm tài khoản
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row p-3">
                        <div class="infor">
                            <div class="mb-3 row">
                                <label for="inputName" class="col-form-label px-0"><strong>Chọn file:</strong></label>
                                <input type="file" class="form-control" ref="file" @change="onSelect" />
                            </div>
                            <div class="mb-3 d-flex justify-content-center">
                                <button type="button" class="btn btn-success" @click="ImportAccount" data-bs-dismiss="modal">Upload</button>
                            </div>


                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index";

export default {
    name: "ImportAccount",
    data() {
        return {
            file: ""
        }
    },
    methods: {
        onSelect() {
            const file = this.$refs.file.files[0];
            this.file = file
        },
        async ImportAccount() {
            const formData = new FormData()
            formData.append('file', this.file)
            const token = localStorage.getItem("token");

        const res = await axios.post(
                `${config.domain}/admin/import-excel`,
                {
                    formData
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            ).then((data) => {
                console.log(data)
            }).catch((e) => {
                 console.log(e)
             })
            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

        }
    }
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
