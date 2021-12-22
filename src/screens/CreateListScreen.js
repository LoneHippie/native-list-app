import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';

import Layout from '../layouts/Layout';
import ListForm from '../components/ListForm';

const CreateListScreen = ({ navigation }) => {

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
            <ListForm />
        </Layout>
    )
};

export default CreateListScreen;