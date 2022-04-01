import { ActionType } from './types'
interface setCountryListAction{
    type: ActionType.SET_COUNTRY_LIST,
    payload:Object| any
}
interface setCountryByNameAction{
    type: ActionType.SET_COUNTRY_BY_NAME,
    payload: any
}
interface setCountryByRegionAction{
    type: ActionType.FILTER_BY_REGION,
    payload:Object| any
}
export type Action = setCountryListAction | setCountryByNameAction | setCountryByRegionAction