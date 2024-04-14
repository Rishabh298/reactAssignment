import {ActionType} from './actionType';

const initialState: any = {cardData: []}
    export const CardReducer = (state = initialState, action: any) => {
        switch (action.type) {
            case ActionType.cardData:
                return {
                  ...state,
                  cardData: action.payload,
                };
              default:
                return state;
        }
    
      };
       
       export default CardReducer ;
