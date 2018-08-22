/** @format */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import { StackNavigator } from 'react-navigation';

//NameScreen
import { MainScreen, NewGameScreen, GameNoteScreen, NewNoteScreen } from './NameScreen'

//Components
import MainComponent from './components/MainComponent'
import NewGameComponent from './components/NewGameComponent'

let App = StackNavigator({
    MainScreen: {
        screen: MainComponent
    },
    NewGameScreen: {
        screen: NewGameComponent
    },
    // GameNoteScreen: {
    //     screen: MainScreen
    // },
    // NewNoteScreen: {
    //     screen: MainScreen
    // },
});


AppRegistry.registerComponent(appName, () => App);
