const spellUpdate = {
    state: {
        spellUpdate: {},
    },

    getters: {
        getSpellUpdate(state) {
            return state.spellUpdate;
        },
    },
    mutations: {
        SET_SPELL_UPDATE(state, spell) {
            state.spellUpdate = spell;
        },
    },
};
export default spellUpdate;
