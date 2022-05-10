import { ContentModel } from "../Store_DATA/Content_model";
import RootStore from "../Store_DATA/Root_store";
import Travel from "./mainInterface"
import { Instance } from 'mobx-state-tree'

interface Country extends Travel {
   // country_int:{
       photo:string
  //  }
}
export default Country;

export interface IRootStore extends Instance<typeof RootStore> {
}

export interface IContentModel extends Instance<typeof ContentModel> {
}