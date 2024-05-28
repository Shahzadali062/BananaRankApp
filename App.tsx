/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import AppContent from './src/containers/AppContent/AppContent';
import SplashScreen from './src/components/Splash/SplashScreen'

const App: React.FC = () => {

  const [next, setNext] = useState(false)

  useEffect(() => {

    setTimeout(() => {

      setNext(true)

    }, 2000)
    
  }, [])

  return (
    <Provider store={store}>
      {
        next == true ?
          <AppContent />
          :
          <SplashScreen />
      }

    </Provider>
  );
}

export default App;
