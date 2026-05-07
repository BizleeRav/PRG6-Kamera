import React from 'react';

import { createBottomTabNavigator }
from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs({
  history,
  setHistory
}) {

  return (

    <Tab.Navigator>

      <Tab.Screen name="Beranda">

        {() => (
          <HomeScreen
            history={history}
            setHistory={setHistory}
          />
        )}

      </Tab.Screen>

      <Tab.Screen name="Riwayat">

        {() => (
          <HistoryScreen
            history={history}
          />
        )}

      </Tab.Screen>

    </Tab.Navigator>
  );
}