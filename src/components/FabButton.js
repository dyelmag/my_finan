import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'

export default class FabButton extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button]}>
                        <Entypo name="camera" size={20} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.menu]}>
                        <AntDesign name="plus" size={24} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#00213b',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        }
    },
    menu: {
        backgroundColor: '#00213b'
    }
})
