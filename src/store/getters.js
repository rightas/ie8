import { langMap } from '@/map'
const getters = {
    language: state => state.app.language,                     //en  zh
    langMap: state => langMap.get(state.app.language),    //en  cn
}
export default getters