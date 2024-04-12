import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {ActionType} from './actionType';

export const setCardData = (data: any[]) => (dispatch: ThunkDispatch<null, null, AnyAction>) => {
    dispatch({
      type: ActionType.cardData,
      payload: data,
    });
  };

  export const setTotalPage = (data: number) => (dispatch: ThunkDispatch<null, null, AnyAction>) => {
    dispatch({
      type: ActionType.totalpage,
      payload: data,
    });
  };