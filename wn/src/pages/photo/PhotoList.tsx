import { useEffect, useState } from 'react';
import { useObserver } from "mobx-react";
import useStores from '../../store';
import constant from '../../constant/constant';

const PhotoList = () => {
  const { photoList } = useStores();
  const [searchKeyword, setSearchKeyword] = useState('');
  const onSearchPhotoList = (param: string) => {
    photoList.searchPhotoList(param);
  }

  useEffect(() => {
    photoList.searchPhotoList('');
  }, []);

  return useObserver(() => (
    <>
      <div className="search_box">
        <input className='' type="text" placeholder="검색하기" value={searchKeyword} onChange={(event) => {setSearchKeyword(event.target.value);}}/>
        <button onClick={() => {onSearchPhotoList(searchKeyword); setSearchKeyword('');}}>search</button>
      </div>
      {photoList.list.map(item => {
        return <article key={item.seq}>
                  <header>{item.name} Header</header>
                  <img src={`${constant.BACK_END_URL}/woono/photo/view/${item.seq}/${item.fileName}`} />
                  <footer>{item.name} Footer</footer>
                </article>;
      })}
    </>
  ));
}
  
export default PhotoList;