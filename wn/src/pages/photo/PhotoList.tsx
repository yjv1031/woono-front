import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSetter } from '../../mod/counter';
import { RootState } from '../../mod';

export default function PhotoList() {
  const [text, setText] = useState('');
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

  const onCounterSetter = (param: string) => {
    dispatch(counterSetter(param));
  }

  return (
    <main className="container">
      <input type="text" value={text} onChange={(event) => {setText(event.target.value);}}/>
      {count.map(item => {
        return <article>
                  <header>{item} Header</header>
                  {item} Body
                  <footer>{item} Footer</footer>
                </article>;
      })}
      <button onClick={() => {onCounterSetter(text); setText('');}}>asdasdas</button>
    </main>
  );
}