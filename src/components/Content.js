import React from 'react';
import { View, StyleSheet } from 'react-native';

function Content({ children }) {
    return (
        <View style={styles.content}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 16
    }
})

export default Content;