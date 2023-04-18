import React from 'react';

export function CommonLayout({children} : {children: React.ReactNode}) {
  return (  
    <main className="container">
      <nav>
        <ul>
          <li><strong>WOONO</strong></li>
        </ul>
        <ul>
          <li><a href="/photo/list" role="button">페이지 구경 하기</a></li>
          <li><a href="/photo/regist" role="button">내 페이지 관리</a></li>
        </ul>
      </nav>
      {children}
    </main>
  );
}