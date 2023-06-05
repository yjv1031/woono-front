import { observable } from "mobx";
import { photo } from "../../interface/photo";
import { callSearchPhotoListApi } from "../../repository/photo/photoRepository";

interface photoListStore {
  list: photo[],
  add: () => void,
  searchPhotoList: (searchKeyword: string) => void
}

export const photoList = observable<photoListStore>({
  list: [],
  add() {
    debugger;
    console.log(this.list);
  },
  async searchPhotoList(searchKeyword: string) {
    const res = await callSearchPhotoListApi(searchKeyword);
    if(res) {
      this.list = res.data;
    } else {
      this.list = [];
    }
  },
});