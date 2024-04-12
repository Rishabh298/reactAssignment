import {ActionType} from './actionType';

const initialState: any = {cardData: [], totalPage: 0}
    export const CardReducer = (state = initialState, action: any) => {
        switch (action.type) {
            case ActionType.cardData:
                return {
                  ...state,
                  cardData: action.payload,
                };
                case ActionType.totalpage:
                    return {
                      ...state,
                      totalpage: action.payload,
                    };
              default:
                return state;
        }
    
      };
       
       export default CardReducer ;
