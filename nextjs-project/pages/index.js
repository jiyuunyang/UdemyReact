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

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
