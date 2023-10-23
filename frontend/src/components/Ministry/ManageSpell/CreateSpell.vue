<template>
    <div
        class="modal fade"
        id="createSpell"
        aria-labelledby="modalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 600px">
                <div class="modal-header text-white">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Thêm đợt
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
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputSpellname"
                                    name="spellname"
                                    v-model="spellname"
                                />
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
                                    v-model="name"
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
                                    v-model="start"
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
                                    v-model="end"
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
                        @click="handleCreateSpell"
                        data-bs-dismiss="modal"
                        :disabled="!spellname || !name || !start || !end"
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
    name: "CreateSpell",
    data() {
        return {
            spellname: "",
            name: "",
            start: "",
            end:"",
            status: true,
        };
    },
    methods: {
        async handleCreateSpell() {
            const res = await axios.post(
                `${config.domain}/spell/create-spell`,
                {
                    spellname: this.spellname.trim(),
                    name: this.name.trim(),
                    start: this.start,
                    end: this.end,
                    status: this.status
                },
            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("ADD_SPELL_CURRENT", {
                    _id: res.data.newSpell._id,
                    spellname: this.spellname,
                    name: this.name,
                    start: this.start,
                    end: this.end,
                    status: this.status

                });
                this.spellname = '';
                this.name = '';
                this.start = '';
                this.end = '';
            }
            this.$parent.showSpell()

        },
    },
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
