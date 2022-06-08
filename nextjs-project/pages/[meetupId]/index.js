import { Fragment } from 'react';
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

export default MeetupDetails;
