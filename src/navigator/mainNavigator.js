import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19674Navigator from '../features/BlankScreen19674/navigator';
import BlankScreen49304Navigator from '../features/BlankScreen49304/navigator';
import BlankScreen39255Navigator from '../features/BlankScreen39255/navigator';
import BlankScreen19252Navigator from '../features/BlankScreen19252/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19674: { screen: BlankScreen19674Navigator },
BlankScreen49304: { screen: BlankScreen49304Navigator },
BlankScreen39255: { screen: BlankScreen39255Navigator },
BlankScreen19252: { screen: BlankScreen19252Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
