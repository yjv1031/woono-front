import axios from "axios";

export function callSearchPhotoListApi(keyword: FileList) {
  const option ={
    url :'http://localhost3000/test',
    method:'GET',
    header:{
       'Accept':'application/json',
       'Content-Type':`application/json;charset=UTP-8`
    },
    data:{
      keyword: keyword,
    }
  }
  
  axios(option).then(res => console.log(res));
}

export function callPhotoRegistApi(param: FormData) {
  const option ={
    url :'http://localhost3000/test',
    method:'GET',
    header:{
       'Accept':'application/json',
       'Content-Type':`application/json;charset=UTP-8`
    },
    data:{
      param
    }
  }
  
  axios(option).then(res => console.log(res));
}