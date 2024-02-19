import { useRouter } from 'next/router';

const ReadPost = () => {
  const router = useRouter();
  const { id } = router.query; // URL에서 id 파라미터를 가져옵니다.

  // 여기에서 id를 사용하여 데이터를 불러오는 로직을 추가할 수 있습니다.
  // 예를 들어, API 호출을 통해 id에 해당하는 포스트의 데이터를 불러올 수 있습니다.

  return <div>Post ID: {id}</div>; // 임시로 id를 표시하는 예시입니다.
};

export default ReadPost;