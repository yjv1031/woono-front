import axios from "axios";
import constant from '../../constant/constant';

export async function callSearchPhotoListApi(keyword: string) {
  try {
    const res = await axios.get(constant.BACK_END_URL + `/woono/photo/list?keyword=${keyword}`);
    return res;
  } catch(err: any) {
    if(err?.response?.data?.message) {
      alert(err.response.data.messag);
    } else {
      alert('잠시 후 다시 시도하십시오.');
    }
  }
}

export async function callPhotoRegistApi(param: FormData) {
  try {
    const res = await axios.post(constant.BACK_END_URL + '/woono/photo', param, {
      headers:{
         'Accept':'application/json',
         'Content-type': 'multipart/form-data'
      }});
    return res;  
  } catch(err: any) {
    if(err?.response?.data?.message) {
      alert(err.response.data.message);
    } else {
      alert('잠시 후 다시 시도하십시오.');
    }
    return false;
  }
}