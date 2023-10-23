const categoryUpdate = {
    state: {
        categoryUpdate: {},
    },

    getters: {
        getCategoryUpdate(state) {
            return state.categoryUpdate;
        },
    },
    mutations: {
        SET_CATEGORY_UPDATE(state, category) {
            state.categoryUpdate = category;
        },
    },
};
export default categoryUpdate;
