// import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First MeetUp',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/SMRT_Cheonhodaero.jpg',
    address: 'Some address 5, 1234 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second MeetUp',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/SMRT_Cheonhodaero.jpg',
    address: 'Some address 10, 1234 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  // 전통적인 useEffect 방식은 스크립트가 비게 됨(사전 렌더링이 아닌 그 다음 렌더링할 때 데이터가 들어가므로.)
  // const [loadMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   //send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  // return <MeetupList meetups={loadMeetups} />;
  return <MeetupList meetups={props.meetups} />;
}

// 폴더 안에 있는 페이지 컴포넌트 파일에서만 동작
export async function getStaticProps() {
  // server side에서만 실행됨
  // 방문자의 컴퓨터에서 동작하지 않음
  // fetch data from an API
  // object return
  // serverside에서 데이터 가져올 수 있음. 사전 렌더링 하기 전에 빌드 프로세스에서 데이터 가져옴. NextJS의 주요 기능.
  // 최신 정보는 가져오지 않음. 항상 예전 모임만 볼 수 있음(build된 것만)
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // revalidate 설정
    // 점진적 정적 생성 (NextJS가 서버에서 10 초 간격으로 생성. 사전에 생성했던 페이지를 대체함. data update fequency)
    // 데이터가 바뀔 때마다 매번 build할 필요 없음
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   //build process 중에는 실행되지 않음. 배열 다음에 서버에서 실행됨.
//   //요청이 들어올 떄마다 실행
//   // 주기적인 요청이 필요할 때
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
