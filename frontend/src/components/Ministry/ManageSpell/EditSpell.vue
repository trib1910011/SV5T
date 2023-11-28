<template>
    <div
        class="modal fade"
        id="editInforSpell"
        aria-labelledby="modalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Chỉnh sửa đợt
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
                                    ><strong>Mã đợt</strong></label
                                >
                                
                                <div class="form-control" id="spellname">
                                    {{ spellUpdate.spellname }}
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputName"
                                    class="col-form-label px-0"
                                    ><strong>Tên đợt:</strong></label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputName"
                                    name="name"
                                    v-model="spellUpdate.name"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputDatestart"
                                    class="col-form-label px-0"
                                    ><strong>Ngày bắt đầu:</strong></label
                                >
                                <input
                                    type="date"
                                    class="form-control"
                                    id="inputDatestart"
                                    name="start"
                                    v-model="spellUpdate.start"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputDateend"
                                    class="col-form-label px-0"
                                    ><strong>Ngày kết thúc</strong></label
                                >
                                <input
                                    type="date"
                                    class="form-control"
                                    id="inputDateend"
                                    name="end"
                                    v-model="spellUpdate.end"
                                />
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputRatio"
                                    class="col-form-label px-0"
                                    ><strong>Tỉ lệ đạt</strong></label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputRatio"
                                    name="ratio"
                                    v-model="spellUpdate.ratio"
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
                        @click="handleUpdateSpell"
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
    name: "EditSpell",
    methods: {
        async handleUpdateSpell() {
            try {
                const res = await axios.patch(
                    `${config.domain}/spell/update-spell`,
                    {
                        spellId: this.spellUpdate.id,
                        spellname: this.spellUpdate.spellname.trim(),
                        name: this.spellUpdate.name.trim(), // Sử dụng this.spellUpdate.name thay vì this.name
                        start: this.spellUpdate.start,
                        end: this.spellUpdate.end,
                        ratio: this.spellUpdate.ratio
                    },
                   
                    
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
        spellUpdate: "getSpellUpdate",
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
