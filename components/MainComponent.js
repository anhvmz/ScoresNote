import React, { Component } from 'react'
import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import listGame from '../data';
import BottomView from '../commons/BottomView';
import { NewGameScreen } from '../NameScreen'

class FlatListItem extends Component {
    render() {
        return (
            <View
                // style={this.props.index % 2 == 0 ? styles.itemGameEven : styles.itemGameOdd}
                style={styles.itemGame}
            >
                <Text>{this.props.item.name}</Text>
                <Text>{this.props.item.description}</Text>
            </View>
        );
    }
}

export default class MainComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state
        let title = "Main";
        let headerTitleStyle = {
            color: 'black',
            flex: 1,
            textAlign: 'center',
        }
        let headerStyle = {
            backgroundColor: 'dodgerblue',

        };

        return { title, headerStyle, headerTitleStyle }
    }

    _onCreateNewGame() {
        console.log("to NewGameComponent .....");
        this.props.navigation.navigate(NewGameScreen)
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{
                    flex: 90
                }}>
                    <FlatList
                        style={styles.listGame}
                        data={listGame}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) => {
                            console.log(item);
                            return <FlatListItem item={item} index={index}>
                            </FlatListItem>;
                        }}
                    />
                </View>

                <BottomView onPress={this._onCreateNewGame.bind(this)} text={`Create a new game`} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    listGame: {
        backgroundColor: 'white',
        flex: 1,
    },

    itemGame: {
        marginStart: 10,
        marginEnd: 10,
        marginTop: 3,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#DC143C',
    },

    itemGameOdd: {
        backgroundColor: 'red',
        shadowColor: 'gray'
    },

    itemGameEven: {
        backgroundColor: 'green',
        shadowColor: 'gray'
    },

});