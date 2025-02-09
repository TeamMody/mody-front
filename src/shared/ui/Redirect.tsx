import { useSearchParams } from 'react-router';

const Redirect = () => {
  const params = useSearchParams();
  return <div>Redirect</div>;
};

export default Redirect;
