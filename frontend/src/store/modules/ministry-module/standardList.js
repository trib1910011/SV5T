const standardListModule = {
    state: {
        standardCurrent: [],
    },

    getters: {
        getstandardCurrent(state) {
            return state.standardCurrent;
        },
    },
    mutations: {
        SET_STANDARD_CURRENT(state, standardCurrent) {
            state.standardCurrent = standardCurrent;
        },
        ADD_STANDARD_CURRENT(state, standard) {
            state.standardCurrent.push(standard);
        },
        DELETE_STANDARD_CURRENT(state, id) {
            for (let i = 0; i < state.standardCurrent.length; i++) {
                if (state.standardCurrent[i]._id == id) {
                    state.standardCurrent.splice(i, 1);
                    return;
                }
            }
        },
    },
    actions: {},
};
export default standardListModule;
