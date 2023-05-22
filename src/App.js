import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhonesFetch } from './phoneState';

import './App.css';

function App() {
  const phones = useSelector((state) => state.phones.phones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhonesFetch());
  }, [dispatch]);

  console.log(phones);

  return <div className="App">Welcome</div>;
}

export default App;
