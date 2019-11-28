import i18n from '@/i18n'
// import { langAbbrMap } from '@/map'
const state = {
    language: 'zh',
}

const mutations = {
    SET_LANGUAGE (state, language) {
        state.language = language
    }
}

const actions = {
    setLanguage ({ commit }, language) {
        i18n.locale = language
        commit('SET_LANGUAGE', language)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
