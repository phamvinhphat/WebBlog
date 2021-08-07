import { hideModal, getType, showModal } from "../actions";
import { INIT_STATE } from "../../constant";

export default function modalReducers(state = INIT_STATE.modal, action) {
    switch(action.type) {
        case getType(showModal):
          return{
              isShow: true,
          };
          case getType(hideModal):
            return{
                isShow: false,
            };
            default:
                return state;
    }
}
