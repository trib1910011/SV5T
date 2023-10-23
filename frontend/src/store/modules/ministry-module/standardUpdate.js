const standardUpdate = {
    state: {
        standardUpdate: {},
    },

    getters: {
        getStandardUpdate(state) {
            return state.standardUpdate;
        },
    },
    mutations: {
        SET_STANDARD_UPDATE(state, standard) {
            state.standardUpdate = standard;
        },
    },
};
export default standardUpdate;
