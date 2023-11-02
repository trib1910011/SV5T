const formListModule = {
    state: {
        formCurrent: [],
    },

    getters: {
        getFormCurrent(state) {
            return state.formCurrent;
        },
    },
    mutations: {
        SET_FORM_CURRENT(state, formCurrent) {
            state.formCurrent = formCurrent;
        },
    },
    actions: {},
};
export default formListModule;
