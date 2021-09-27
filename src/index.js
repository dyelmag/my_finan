import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FabButton from './components/FabButton'
import TopMenu from './components/TopMenu';
import Theme from './theme';

export default function App() {
    return (
        <View style={styles.container}>
            <FabButton
                style={{ bottom: 80, right: 60 }}
                theme={Theme}
            />
            <TopMenu theme={Theme} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});