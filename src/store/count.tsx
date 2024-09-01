import {atom} from "recoil"


export const modalState = atom<boolean>({
    key: 'modalState', 
    default: false, 
});

export const searchState = atom<String>({
    key: 'searchState', 
    default : '',
})