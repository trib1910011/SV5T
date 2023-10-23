// import axios from "axios";
// import config from "../config/index";
// import store from "../store/index";
const guardRouter = function (router) {
    let stop = false;


    router.beforeEach(async (to, form, next) => {
        const rule = localStorage.getItem("rule");

        // Not login then redirect to login
        if (!rule && to.fullPath != "/login") {
            next("/login");
        }

        // Logedin then redirect to home
        else if (rule && to.fullPath == "/login") {
            if (rule == "ADMIN") next("/admin/home");
            else if (rule == "STUDENT") next("/student/home");
            else if (rule == "MINISTRY") next("/ministry/home");
            else if (rule == "TEACHER") next("/teacher/home");
        } else {
            // if accessing the site is not authorized. will be blocked
            const uri = rule || "/none";
            if (!to.fullPath.includes(`/${uri.toLowerCase()}`) && !stop) {
                stop = true;
                next("/error");
            }

            // All good
            else next();
        }
    });
};

export default guardRouter;
