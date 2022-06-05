//our-domain.com/news/[newsId] --> 동적 페이지 생성
//동적 변수 사용
import { useRouter } from 'next/router';

function Detailpage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  return <h1> The Detail Page </h1>;
}
export default Detailpage;
