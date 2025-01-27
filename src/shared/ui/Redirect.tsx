import React from 'react';
import { useParams } from 'react-router';

const Redirect = () => {
  const params = useParams();
  console.log(params);
  return <div>Redirect</div>;
};

export default Redirect;
