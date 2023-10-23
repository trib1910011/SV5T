<template>
    <footer
        class="footer d-flex align-items-center justify-content-between px-3"
    >
        <!-- Copyright -->
        <div class="text-center p-3">
            © 2023 Copyright:
            <a
                class="text-dark text-decoration-none"
                target="_blank"
                href="https://facebook.com/"
                >Nguyễn Trọng Trí</a
            >
        </div>
        <!-- Contact -->
        <div class="contact d-flex">
            <div class="email me-3">
                <i class="bi bi-envelope-fill"></i>
                SV5T@gmail.com
            </div>
            <a
                class="facebook-fanpage text-decoration-none text-black"
                href="https://www.facebook.com/CTUDHCT/"
                target="_blank"
            >
                <i class="bi bi-facebook"></i>
                fb.com/CTUSV5T
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>

<style>
.footer {
    background-color: rgb(160, 160, 160);
    margin-right: 100px;
    margin-left: 100px;
}

.facebook-fanpage {
    color: #212529 !important;
}
</style>
