import { Fragment, useContext } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image='https://upload.wikimedia.org/wikipedia/commons/a/a7/SMRT_Cheonhodaero.jpg'
        title='First Meetup'
        address='Some Street 5, Some City'
        description='This is a first meetup'
      />
    </Fragment>
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  //fetch data for a single meetup
  //react hook 쓸 수  없음
  const meetupId = context.params.meetupId;
  //개발자 서버에서만 볼 수 있음. 브라우저에서는 볼 수 없음
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/SMRT_Cheonhodaero.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
