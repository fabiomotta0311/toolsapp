import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';

export default createStackNavigator({
  Main,
},{
  navigationIptions:{
    headerStyle:{
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF"
  }
});
