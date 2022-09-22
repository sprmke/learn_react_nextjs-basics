import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const { newsId } = router.query;

  return <div>DetailPage - {newsId}</div>;
};

export default DetailPage;
