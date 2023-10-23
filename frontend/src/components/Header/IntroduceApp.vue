<template>
    <div class="app-introduce p-3 d-flex align-items-center">
        <div class="d-flex align-items-center flex-grow-1">
            <img src="/logo.png" alt="logo" style="width: 80px; height: 80px" />
            <div class="app-name ms-3">
                <h2
                    class="d-flex align-items-center fw-bold p-0 m-0"
                    style="color: #00b0f0"
                >
                    <p class="m-0">STUDENT OF FIVE MERITS</p>
                </h2>
                <h5 style="color: #595959">
                    Hệ thống quản lý sinh viên 5 tốt
                </h5>
            </div>
        </div>
        <div v-if="isLogin" class="dropdown d-flex align-items-center">
            <span class="fw-bold">{{ account.name }}</span>

            <button
                class="avatar-icon border border-light bg-white d-flex align-items-center dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img
                    :src="account.urlAvatar"
                    alt="Ảnh đại diện"
                    style="width: 50px; height: 50px"
                    class="rounded-circle"
                />
                &nbsp;
            </button>
            <ul class="dropdown-menu">
                <li>
                    <button class="dropdown-item" @click="handleLogout">
                        <i class="bi bi-box-arrow-right"></i>&nbsp; Đăng xuất
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "IntroduceApp",
    computed: mapGetters({ isLogin: "getIsLogin", account: "getAccount" }),

    methods: {
        ...mapActions(["logout"]),
        handleLogout() {
            this.logout();
            this.$router.push("/login");
        },
    },
};
</script>

<style>
.app-name {
    font-family: "Noto Sans", sans-serif;
}

.btn-option {
    height: 40px;
}

.avatar-icon:hover {
    opacity: 0.8;
}
.dropdown-menu{
    margin-top: 10px;
}
.app-introduce{
    border-top: 4px solid #00b0f0;
}
</style>
