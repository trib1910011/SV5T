<template>
    <div class="animate__animated animate__fadeIn">
        <Header />
        <div
            class="login py-5 col-sm-8 m-auto d-flex flex-column align-items-center"
        >
            <h2 class="login__title fs-2 fw-semibold" style="color: #555">
                Chào mừng đến với hệ thống
                <span style="color: #00b0f0">SINH VIÊN 5 TỐT</span> !
            </h2>
            <form
                class="login__form col-sm-6 mt-5 p-5 rounded-2"
                @submit="login"
            >
            <h3 class="login_h3"><strong>ĐĂNG NHẬP</strong></h3>
                <div class="mb-3">
                    <i class="bi bi-person-fill"></i>&nbsp;
                    <label for="login__name" class="form-label" style="color:#555"
                        ><strong>Tên đăng nhập</strong></label
                    >
                    <input
                        v-model="username"
                        type="text"
                        class="form-control"
                        id="login__name"
                        placeholder="Mã đăng nhập"
                    />
                </div>
                <div class="mb-3">
                    <i class="bi bi-key-fill"></i>&nbsp;
                    <label for="InputPassword" class="form-label" style="color:#555"
                        ><strong>Mật khẩu</strong></label
                    >
                    <input
                        type="password"
                        class="form-control"
                        id="InputPassword"
                        v-model="password"
                        placeholder="Mật khẩu"
                    />
                </div>
                <button
                    type="submit"
                    class="btn btn-primary d-flex m-auto mt-5"
                >
                    <strong>Đăng nhập</strong>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import { mapActions } from "vuex";
export default {
    name: "LoginComponent",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    components: { Header },
    methods: {
        ...mapActions({
            getLogin: "login",
        }),
        login(event) {
            event.preventDefault();

            // handle login
            this.getLogin({
                username: this.username,
                password: this.password,
            });
        },
    },
};
</script>

<style>
.login__form {
    box-shadow: #b3b3b362 0px 2px 8px 0px;
}
.forgot__link {
    text-decoration: none;
}
.login_h3{
    margin-top: -20px;
    margin-bottom: 20px;
    text-align: center;
    color: #00b0f0;
}
</style>
