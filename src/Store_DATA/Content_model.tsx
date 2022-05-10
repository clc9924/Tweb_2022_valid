import { getParent, getParentOfType, types } from 'mobx-state-tree'
import RootStore from './Root_store'
//import RootStore from '../RootStore'

export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    seen: false,
    city: '',
    attrcations: '',
    hotel: '',
    stars: '',
    photo: ''
})
    .views((self) => ({
        get isSeen() {
            return self.seen
        },

        findInTitle(param: any) {
            self.city.includes(param)
        }
    }))
    .actions((self) => ({
        
        changeCITY(value: string) {
            self.city = value
        },
        changeATTRCATIONS(value: string) {
            self.attrcations = value
        },
        changeHOTEL(value: string) {
            self.hotel = value
        },
        changeSTARS(value: string) {
            self.stars = value
        },
        changePHOTO(value: string) {
            self.photo = value
        },

        changeSeen(state: boolean) {
            console.log('>>state', state)
            self.seen = state
        },

        addNote() {
            const rootStore = getParentOfType(self, RootStore)
            rootStore.addNote(self.id)
        },

        removeNote() {
            const rootStore = getParentOfType(self, RootStore)
            rootStore.removeNote(self.id)
        }

    }))


