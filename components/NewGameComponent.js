import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import Button from 'react-native-button'
import BottomView from '../commons/BottomView';

export default class NewGameComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state
        let headerTitle = "New Game";
        let headerTitleStyle = {
            color: 'black',
            flex: 1,
            textAlign: 'center',
        }
        let headerStyle = {
            backgroundColor: 'dodgerblue'
        };
        return { headerTitle, headerStyle, headerTitleStyle }
    }

    state = {}
    _onCreate() {

    }
    render() {
        return (
            <View style={styles.root}>
                <View style={{
                    flex: 90
                }}>
                    
                </View>
                <BottomView onPress={this._onCreate.bind(this)} text={`Create`} />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    
    root: { 
        flex: 1,
        backgroundColor: 'white'
    }
    
});