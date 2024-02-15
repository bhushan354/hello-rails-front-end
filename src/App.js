import './App.css';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { fetchGreeting } from './redux/slices/greetingSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const greeting = useAppSelector((state) => state.greeting.value);
  const loading = useAppSelector((state) => state.greeting.loading);
  const error = useAppSelector((state) => state.greeting.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div className="App">
      <h2>Below are greetings fetches from rails api</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(fetchGreeting());
        }}
      >
        Refresh
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">Start your rails server in order to get the greetings</p>}
      <h1>{greeting}</h1>
    </div>
  );
};

export default App;
