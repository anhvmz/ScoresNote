import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import Button from 'react-native-button'

export default class BottomView extends Component {
    state = {}
    render() {
        return (
            <View style={{
                flex: 10,
                backgroundColor: 'dodgerblue',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 3,
            }}>
                <Button style={styles.newGameButton} onPress={this.props.onPress}>
                    {this.props.text}
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    newGameButton: {
        borderRadius: 10,
        padding: 10,
        color: 'white',
        backgroundColor: '#FF8C00',
    }
});