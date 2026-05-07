import 'react-native-gesture-handler';

import React, { useState } from 'react';

import { NavigationContainer }
from '@react-navigation/native';

import BottomTabs from './navigation/BottomTabs';

export default function App() {

  const [history, setHistory] = useState([]);

  return (
    <NavigationContainer>

      <BottomTabs
        history={history}
        setHistory={setHistory}
      />

    </NavigationContainer>
  );
}