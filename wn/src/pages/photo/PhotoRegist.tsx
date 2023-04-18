import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { photoFileUploadObject } from '../../interface/photo';

export default function PhotoRegist() {
  const [files, setFiles] = useState<photoFileUploadObject[]>([]);
  const photoList = useSelector((state: RootState) => state.photoList.list);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

  const onFileChange = (event: any) => {
    const uploadFile = event.target.files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      let preview = reader.result;
      if(preview == null) {
        preview = '';
      } else if(typeof preview != 'string') {
        preview = String.fromCharCode.apply(null, Array.from(new Uint16Array(preview)));
      }

      const obj: photoFileUploadObject = {
        file: uploadFile,
        preview: preview
      };

      setFiles([
        ...files,
        obj
      ]);
   	};
  }

  const deleteUploadFile = (e: any, idx: number) => {
    e.preventDefault();
    setFiles(files.filter((item, index) => {return idx != index}).map(item => item));
  }

  return (    
      <>
        <a href="#" role="button" onClick={() => {}}>사진 업로드</a>
        <input type="file" onChange={onFileChange}/>
        {files.map((item, idx) => {
          return (
            <article key={`upload_file_idx_${idx}`} className='upload_file_list'>
              <header>{item.file.name}</header>
              <img src={item.preview}/>
              <footer>
                <a href="#" role="button" className='upload_btn' onClick={(e) => deleteUploadFile(e, idx)}>삭제</a>
              </footer>
              
            </article>
          );
        })}
      </>
  );
}