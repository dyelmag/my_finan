import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class TopMenu extends Component {
    render() {
        const { colors } = this.props.theme

        return (
            <View style={[styles.container, { backgroundColor: colors.primary }]}>
                <View style={[styles.menu]}>
                    <Text>aaaa</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 100,
        flex: 0.15
    },
    menu: {
        marginTop: 30
    }
})
