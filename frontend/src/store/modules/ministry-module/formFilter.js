const FormFilter = {
    state: {
        className: [],
        currentList: [],
        formActive: {},
    },
    getters: {
        getClassName(state) {
            return state.className;
        },
        getCurrentList(state) {
            return state.currentList;
        },
        getFormActive(state) {
            return state.formActive;
        },
    },
    mutations: {
        SET_CLASS_NAME(state, className) {
            state.className = className;
        },
        SET_CURRENT_LIST(state, currentList) {
            state.currentList = currentList;
        },
        SET_FORM_ACTIVE(state, form) {
            state.formActive = form;
        },
    },
    actions: {},
};

export default FormFilter;
