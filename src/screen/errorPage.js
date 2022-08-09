import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Page not found</h1>
      <button className='btn btn-success' onClick={()=>navigate('/')}>Torna alla home</button>
    </div>
  );
}

export default ErrorPage;
