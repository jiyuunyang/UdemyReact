//our-domain.com/news
import Link from 'next/link';
import { Fragment } from 'react';

function Newspage() {
  return (
    <Fragment>
      <h1> The News Page </h1>
      <ul>
        <li>
          {/*
          <a href='/news/nextjs-is-a-great-framework'>NextJS is a Great Framework</a>
           not a SPA : 새롭게 페이지를 불러들이는 방식. */}
          {/* SPA 방식  : Link를 이용. 새 HTML 페이지를 가지고 오지 않음. url입력시 SSR 페이지 내부에서 작동시 CSR.
          링크가 앵커 태그를 렌더링, 클릭하면 브라우저가 새 HTML 받는 요청을 하지 않음. 대신 컴포넌트를 불러오고 URL을 불러옴 */}
          <Link href='news/nextjs-is-a-great-framework'>Next JS is a Great Framework</Link>
        </li>
        <li>SomethingElse</li>
      </ul>
    </Fragment>
  );
}
export default Newspage;
