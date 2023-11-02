const routersModule = {
    state: {
        teacherRoutes: [
            { name: "Trang chủ", path: "/teacher/home" },
            { name: "Tiêu chí đánh giá", path: "/teacher/standard"},
            { name: "Danh sách đơn đăng ký SV5T", path: "/teacher/formmanage" },
            { name: "Tuyên dương sinh viên 5 tốt", path: "/teacher/commend" },
        ],
        ministryRoutes: [
            { name: "Trang chủ", path: "/ministry/home" },
            { name: "Quản lý đợt đăng ký SV5T", path: "/ministry/spellmanage"},
            { name: "Quản lý tiêu chí", path: "/ministry/categorymanage"},
            { name: "Quản lý chi tiết tiêu chí", path: "/ministry/standardmanage"},
            { name: "Quản lý đơn", path: "/ministry/formmanage"},
        ],
        adminRoutes: [
            { name: "Trang chủ", path: "/admin/home" },
            { name: "Thống kê tài khoản", path: "/admin/dashboard" },
            { name: "Quản lý tài khoản", path: "/admin/manage"},
        ],
        studentRoutes: [
            { name: "Trang chủ", path: "/student/home" },
            { name: "Tiêu chí đánh giá", path: "/student/standard" },
            { name: "Đăng ký sinh viên 5 tốt", path: "/student/formregistermanage" },
            { name: "Tuyên dương sinh viên 5 tốt", path: "/student/commend" },
        ],
    },
    getters: {
        getRouters(state) {
            return state;
        },
    },
};

export default routersModule;
