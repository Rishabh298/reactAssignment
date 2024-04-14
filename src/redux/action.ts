import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {ActionType} from './actionType';
import cardDataApi from "../apis/cardDataApi";

export const setCardData = (pageNumber: string, cardData: []) => {
    return async function (dispatch: ThunkDispatch<null, null, AnyAction>) {
      let param = 'users?page='+pageNumber;
      const response = await cardDataApi.get(param);
      const cardaDataList = cardData.length > 0 ? [...cardData, ...response?.data?.data] : response?.data?.data;
      console.log('API-RESPONSE', response?.data?.data);
      dispatch ({
        type: ActionType.cardData,
        payload: cardaDataList,
      })
        }
  };
