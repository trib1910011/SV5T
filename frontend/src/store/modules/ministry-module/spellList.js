const spellListModule = {
    state: {
        spellCurrent: [],
    },

    getters: {
        getspellCurrent(state) {
            return state.spellCurrent;
        },
    },
    mutations: {
        SET_SPELL_CURRENT(state, spellCurrent) {
            state.spellCurrent = spellCurrent;
        },
        ADD_SPELL_CURRENT(state, spell) {
            state.spellCurrent.push(spell);
        },
        DELETE_SPELL_CURRENT(state, id) {
            for (let i = 0; i < state.spellCurrent.length; i++) {
                if (state.spellCurrent[i]._id == id) {
                    state.spellCurrent.splice(i, 1);
                    return;
                }
            }
        },
    },
    actions: {},
};
export default spellListModule;
