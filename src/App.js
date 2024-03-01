import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { fetchGreeting } from './redux/slices/greetingSlice';
import Greetings from './components/Greetings';

const App = () => {
  const dispatch = useAppDispatch();
  const greeting = useAppSelector((state) => state.greeting.value);
  const loading = useAppSelector((state) => state.greeting.loading);
  const error = useAppSelector((state) => state.greeting.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchGreeting());
  };

  return (
    <Greetings
      greeting={greeting}
      loading={loading}
      error={error}
      onRefresh={handleRefresh}
    />
  );
};

export default App;
