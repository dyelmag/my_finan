import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'

export default class FabButton extends Component {

    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue,
            friction: 6,
            useNativeDriver: true,
        }).start();

        this.open = !this.open;
    }

    render() {
        const { colors } = this.props.theme

        const cameraStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -60]
                    })
                }
            ]
        }

        const likeStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -120]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.submenu, likeStyle, { backgroundColor: colors.primary }]}>
                        <Feather name="trending-up" size={24} color={colors.accent} />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.submenu, cameraStyle, { backgroundColor: colors.primary }]}>
                        <Feather name="trending-down" size={24} color={colors.accent} />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, { backgroundColor: colors.primary }, rotation]}>
                        <AntDesign name="plus" size={24} color={colors.accent} />
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
        backgroundColor: '#6200EE'
    },
    submenu: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
    },
    teste: {
        //alignItems: 'center',
        position: 'absolute',
        marginLeft: 20
    }
})
