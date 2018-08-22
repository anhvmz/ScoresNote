import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Button from 'react-native-button'
import BottomView from '../commons/BottomView';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

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

    constructor(props) {
        super(props);
        this.state = {
            newName: ``,
            newNumberPlayers: ``,
        };
    }

    _onCreate() {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.root}>
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
                    <View style={{
                        flex: 90,
                        justifyContent: 'center',
                        backgroundColor: "white",
                    }}>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(newName) => this.setState({ newName })}
                            value={this.state.newName}
                            placeholder={`Input name of game`}
                        />

                        <TextInput
                            style={styles.inputText}
                            onChangeText={(newNumberPlayers) => this.setState({ newNumberPlayers })}
                            value={this.state.newNumberPlayers}
                            placeholder={`Input number of players`}
                        />

                    </View>
                </TouchableWithoutFeedback>
                <BottomView onPress={this._onCreate.bind(this)} text={`Create`} />
            </View>

        );
    }
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: 'white'
    },

    inputText: {
        margin: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor:'rgba(255,255,0,0.2)',
    }

});