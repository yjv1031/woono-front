import { observable } from "mobx";
import { photoFileUploadObject } from "../../interface/photo";
import { callPhotoRegistApi } from "../../repository/photo/photoRepository";

interface photoRegistStore {
  savePhotoList: Function
}

export const photoRegist = observable({
  async savePhotoList(fileList: photoFileUploadObject[]) {
    if(fileList.length > 0) {
      const formData = new FormData();
      fileList.forEach((item) => {
        formData.append('files', item.file);
      });
      const data = {"userNo": 2};
      formData.append('requestDTO', new Blob([JSON.stringify(data)] , {type: "application/json"}));
      const result = await callPhotoRegistApi(formData);
      if(result) {
        alert('파일이 업로드 되었습니다');
        return true;
      } else {
        return false;
      }
    } else {
      alert('파일을 선택 후 업로드 하십시오');
    }
  },
});