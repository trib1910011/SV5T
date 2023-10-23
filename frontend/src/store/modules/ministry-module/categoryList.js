const categoryListModule = {
    state: {
        categoryCurrent: [],
    },

    getters: {
        getcategoryCurrent(state) {
            return state.categoryCurrent;
        },
    },
    mutations: {
        SET_CATEGORY_CURRENT(state, categoryCurrent) {
            state.categoryCurrent = categoryCurrent;
        },
        ADD_CATEGORY_CURRENT(state, category) {
            state.categoryCurrent.push(category);
        },
        DELETE_CATEGORY_CURRENT(state, id) {
            for (let i = 0; i < state.categoryCurrent.length; i++) {
                if (state.categoryCurrent[i]._id == id) {
                    state.categoryCurrent.splice(i, 1);
                    return;
                }
            }
        },
    },
    actions: {},
};
export default categoryListModule;
