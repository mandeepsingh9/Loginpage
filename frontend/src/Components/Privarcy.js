import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const Privarcy = () => {
  const navigate = useNavigate();
  const { Currentuser } = useSelector(state => state.users);

  useEffect(() => {
    if (!Currentuser) {
      navigate('/login');
    }
  }, [Currentuser, navigate]);

  return (
    <>
      {Currentuser && <Outlet /> }
    </>
  );
}

export default Privarcy;
