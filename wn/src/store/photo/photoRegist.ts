import produce from 'immer';
import { photo, photoListState } from '../../interface/photo';

// 액션 타입
const SEARCH_PHOTO_LIST = 'SEARCH_PHOTO_LIST' as const;

// 액션 생성함수
export const searchPhotoListAction = (param: string) => {
  return {
    type: SEARCH_PHOTO_LIST,
    payload: param
  };
};

function searchPhotoList(searchKeyword: string) {
  let result: photo[] = [];
  if(1) {

  }
  return result;
}

// 리듀서
function photoList(
  state: photoListState = {
    list: []
  },
  action: {
    type: string,
    payload?: any
  }
): photoListState {
  switch (action.type) {
    case SEARCH_PHOTO_LIST: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
      const result = searchPhotoList(action.payload);
      return produce(state, item => {
        item.list = result;
      });
    default:
      return state;
  }
}

export default photoList;