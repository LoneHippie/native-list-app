import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler, Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncLists } from '../redux/lists';

import Layout from '../layouts/Layout';
import Lists from '../components/Lists';

import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: 'Exit',
                    onPress: () => BackHandler.exitApp()
                }
            ]);
            return true;
        }

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, []);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncLists())
    }, []);

    const lists = useSelector((state) => state);

    return (
        <Layout>
            <Lists 
                lists={lists.lists.lists}
            />

            <View style={styles.buttonsList}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.push('NewList')}>
                    <Text style={styles.buttonText}>
                        <Icon name={'plus'} size={20} />  Create New List
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.push('Completed')}>
                    <Text style={styles.buttonText}>
                        <Icon name={'check'} size={20} />  Completed Lists
                    </Text>
                </TouchableOpacity>

            </View>
        </Layout>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    buttonsList: {
        display: 'flex',
        flex: 0.15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 20
    },  
    button: {
        alignSelf: 'center',
        width: '70%',
        backgroundColor: '#560bad',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})