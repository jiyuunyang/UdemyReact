//리액트 함수 입력하지 않음
//리액트 컴포넌트 정의, 렌더링, 리턴하지 않음
//서버사이드 코드를 포함하는 함수 정의
//API 라우트는 서버에서만 돌아감. 클라이언트에서는 X.
//들어올 때마다 트리거됨.
//api/new-meeptup

//POST/api/new-meetup
function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;
  }
}

export default handler;
