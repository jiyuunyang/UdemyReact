import classes from './MeetupDetail.module.css';
//class 이름을 고유한 컴포넌트마다 고유한 값으로 바꿈. 스타일이 다른 컴포넌트에 영향을 주지 않음.
//classes는 자바스크립트 객체. CSS에서 정의한 것들 모두 객체로 사용됨.

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
