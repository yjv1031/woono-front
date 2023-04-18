import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchPhotoListAction } from '../../store/photo/photoList';
import { RootState } from '../../store';

export default function PhotoList() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const photoList = useSelector((state: RootState) => state.photoList.list);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

  const onSearchPhotoList = (param: string) => {
    dispatch(searchPhotoListAction(param));
  }

  return (    
      <>
        <div className="search_box">
          <input className='' type="text" placeholder="검색하기" value={searchKeyword} onChange={(event) => {setSearchKeyword(event.target.value);}}/>
          <button onClick={() => {onSearchPhotoList(searchKeyword); setSearchKeyword('');}}>asdasdas</button>
        </div>
        {photoList.map(item => {
          return <article>
                    <header>{item.name} Header</header>
                    {item.name} Body
                    <footer>{item.name} Footer</footer>
                  </article>;
        })}
        <div className="grid">
            <article>
                <header>Header</header>
                Body: I'm a card-2!
                <footer>Footer</footer>
            </article>
        </div>
      </>
  );
}