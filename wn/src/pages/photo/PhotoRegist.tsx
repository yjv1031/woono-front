import { useState } from 'react';
import { useObserver } from "mobx-react";
import { photoFileUploadObject } from '../../interface/photo';
import useStores from '../../store';

const PhotoRegist = () => {
  const { photoRegist } = useStores();

  const { savePhotoList } = photoRegist;
  const [files, setFiles] = useState<photoFileUploadObject[]>([]);

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

    event.target.value = ''; 
  }

  const deleteUploadFile = (e: any, idx: number) => {
    e.preventDefault();
    setFiles(files.filter((item, index) => {return idx != index}).map(item => item));
  }

  const callSavePhotoList = async(e : any) => {
    e.preventDefault();
    const result = await savePhotoList(files);
    if(result) {
      setFiles([]);
    }
  }

  return useObserver(() => (
    <>
      <a href="#" role="button" onClick={(e) => {callSavePhotoList(e);}}>사진 업로드</a>
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
  ));
}

export default PhotoRegist;