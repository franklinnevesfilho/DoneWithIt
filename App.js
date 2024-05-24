import {StyleSheet, Image} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";


function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;

