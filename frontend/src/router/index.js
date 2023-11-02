import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Error from "../views/Error.vue";
import Ministry from "../views/Ministry";
import Admin from "../views/Admin";
import Student from "../views/Student.vue";
import Teacher from "../views/Teacher.vue";
import AdminManage from "../views/admin/AdminManage.vue";
import SpellManage from "../views/ministry/SpellManage.vue";
import guardRouter from "./guard-router.js";
import HomePage from "../components/GlobalComponent/HomePage.vue";
import FormManage from "../views/teacher/FormManage.vue";
import UpdateInfor from "../views/UpdateInfor.vue";
import FormRegister from "../views/student/FormRegister.vue";
import FormCreate from "../components/Student/Form/CreateForm.vue";
import CategoryManage from "../views/ministry/CategoryManage.vue";
import StandardManage from "../views/ministry/StandardManage.vue";
import DashBoardComponent from "../views/admin/AdminDashboard.vue";
import FormManageMini from "../views/ministry/FormManage.vue";
import CommendStudent from "../views/student/Commend.vue";

const routes = [
    { path: "/", component: Home },

    { path: "/login", component: Login },

    { path: "/error", component: Error },
    {
        path: "/admin",
        component: Admin,
        children: [
            { path: "/admin/home", component: HomePage },
            { path: "/admin/manage", component: AdminManage },
            { path: "/admin/dashboard", component: DashBoardComponent },
        ],
    },
    {
        path: "/ministry",
        component: Ministry,
        children: [
            { path: "/ministry/home", component: HomePage },
            { path: "/ministry/spellmanage", component: SpellManage },
            { path: "/ministry/categorymanage", component: CategoryManage },
            { path: "/ministry/standardmanage", component: StandardManage },
            { path: "/ministry/formmanage", component: FormManageMini }
        ]
    },
    {
        path: "/student",
        component: Student,
        children: [
           
            { path: "/student/home", component: HomePage },
            { path: "/student/standard", component: ()=>import("@/components/Standard/Moral.vue")},
            { path: "/student/standard/moral", component: ()=>import("@/components/Standard/Moral.vue")},
            { path: "/student/standard/study", component: ()=>import("@/components/Standard/Study.vue")},
            { path: "/student/standard/health", component: ()=>import("@/components/Standard/Health.vue")},
            { path: "/student/standard/volunteer", component: ()=>import("@/components/Standard/Volunteer.vue")},
            { path: "/student/standard/integrate", component: ()=>import("@/components/Standard/Integrate.vue")},
            {
                path: "/student/update-infor/:status",
                component: UpdateInfor,
            },
            { path: "/student/formregistermanage", component: FormRegister},
            { path: "/student/formregistermanage/register", component: FormCreate},
            { path: "/student/commend", component: CommendStudent},
        ]
    },
    {
        path: "/teacher",
        component: Teacher,
        children: [
            { path: "/teacher/home", component: HomePage },
            { path: "/teacher/standard", component: ()=>import("@/components/Standard/Moral.vue")},
            { path: "/teacher/standard/moral", component: ()=>import("@/components/Standard/Moral.vue")},
            { path: "/teacher/standard/study", component: ()=>import("@/components/Standard/Study.vue")},
            { path: "/teacher/standard/health", component: ()=>import("@/components/Standard/Health.vue")},
            { path: "/teacher/standard/volunteer", component: ()=>import("@/components/Standard/Volunteer.vue")},
            { path: "/teacher/standard/integrate", component: ()=>import("@/components/Standard/Integrate.vue")},
            { path: "/teacher/formmanage", component: FormManage},
            {
                path: "/teacher/update-infor/:status",
                component: UpdateInfor,
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active-link",
});

guardRouter(router);
export default router;