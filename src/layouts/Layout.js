import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

const Layout = ({ children }) => {

    return (
        <SafeAreaView style={styles.main}>
            { children }
        </SafeAreaView>
    )
};

export default Layout;

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
		flex: 1,
        backgroundColor: '#EEEEEE',
		paddingTop: StatusBar.currentHeight
    }
});