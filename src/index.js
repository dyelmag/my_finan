import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FabButton from './components/FabButton'

export default function App() {
    return (
        <View style={styles.container}>
            <FabButton
                style={{ bottom: 80, right: 60 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});