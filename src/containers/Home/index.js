import { TabNavigator, TabBarTop, StackNavigator } from 'react-navigation';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

const components = {
  Tab1: { screen: StackNavigator({
    Tab1: { screen: Tab1 },
  }, {
    headerMode: 'screen',
    initialRouteName: 'Tab1',
  }) },
  Tab2: { screen: StackNavigator({
    Tab2: { screen: Tab2 },
  }, {
    headerMode: 'screen',
  }) },
  Tab3: { screen: StackNavigator({
    Tab3: { screen: Tab3 },
  }, {
    headerMode: 'screen',
  }) },
  Tab4: { screen: StackNavigator({
    Tab4: { screen: Tab4 },
  }, {
    headerMode: 'screen',
  }) },
};

const TabScreen = TabNavigator(components, {
  initialRouteName: 'Tab1',
  lazy: false,
  swipeEnabled: false,
  tabBarComponent: TabBarTop,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#FF5050',
    inactiveBackgroundColor: 'black',
    inactiveTintColor: 'black',
    iconStyle: {
      marginTop: 5,
    },
    indicatorStyle: {
      opacity: 0,
    },
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 14,
    },
    scrollEnabled: false,
    showIcon: true,
    showLabel: true,
    style: {
      backgroundColor: '#FFFFFF',
    },
  },
  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarPosition: 'bottom',
});

export default TabScreen;
