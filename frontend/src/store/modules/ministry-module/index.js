import teacherModule from "./teacher.js";
import companyModule from "./company.js";
import spellListModule from "./spellList.js";
import spellUpdate from "./spellUpdate.js";
import categoryListModule from "./categoryList.js";
import categoryUpdate from "./categoryUpdate.js";
import standardListModule from "./standardList.js";
import standardUpdate from "./standardUpdate.js";
const ministryModule = {
    modules: { teacherModule, companyModule ,spellListModule, spellUpdate, categoryListModule, categoryUpdate, standardListModule, standardUpdate},
    state() {
        return {
            isShowDetail: false,
        };
    },
    getters: {
        getShowDetail(state) {
            return state.isShowDetail;
        },
    },
    mutations: {
        SHOW_DETAIL(state) {
            state.isShowDetail = true;
        },
        CLOSE_DETAIL(state) {
            state.isShowDetail = false;
        },
    },
};

export default ministryModule;
