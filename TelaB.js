import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from './screens/TelaA';
import TelaB from './screens/TelaB';
import TelaC from './screens/TelaC';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
      <Drawer.Screen name="TelaC" component={TelaC} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
