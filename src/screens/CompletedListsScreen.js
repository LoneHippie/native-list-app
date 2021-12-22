import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';

import Layout from '../layouts/Layout';

const CompletedListsScreen = ({ navigation }) => {

    useEffect(() => {
        const backAction = () => {
            navigation.navigate('Home');
            return true;
        }

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, [])

    return (
        <Layout>
            <View>
                <Text>Completed Stuff</Text>
            </View>
        </Layout>
    )
};

export default CompletedListsScreen;