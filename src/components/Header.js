import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ screenTitle }) => {

    const formatTitle = (title) => {
        return title.replace(/_/g, ' ')
    };

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ formatTitle(screenTitle) }</Text>
        </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 30,
        textTransform: 'capitalize'
    }
})