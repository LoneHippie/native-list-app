import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useDispatch } from 'react-redux';
import { addList } from '../redux/lists';

import uuid from 'react-native-uuid';

import ListItem from './ListItem';

import Icon from 'react-native-vector-icons/FontAwesome';

const ListForm = () => {

    const [ listItem, setListItem ] = useState({ item: '', completed: false });
    const [ items, setItems ] = useState([]);
    const [ name, setName ] = useState('');

    const dispatch = useDispatch();

    const formHandlers = {
        handleUpdateItem: (value) => {
            setListItem(prevState => ({
                ...prevState, item: value
            }))
        },
        handleAddItem: () => {
            setItems(prevState => {
                return [...prevState, listItem]
            })
            setListItem({ item: '', completed: false });
        },
        handleUpdateName: (value) => {
            setName(value);
        },
        handleAddList: () => {
            const list = { 
                name: name, 
                items: items, 
                id: uuid.v4(),
                date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
            };
            dispatch(addList(list));
            setItems([]);
            setName('');
        }
    };

    return (
        <>

            <View style={styles.inputHeader}>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder={'Name your list...'} 
                        value={name}
                        onChangeText={(text) => formHandlers.handleUpdateName(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder={'Item to add...'} 
                        value={listItem.item}
                        onChangeText={(text) => formHandlers.handleUpdateItem(text)}
                    />
                    <TouchableOpacity style={styles.inputBtn} onPress={() => formHandlers.handleAddItem()}>
                        <Icon name={"plus"} size={20} color={'#FFFFFF'} />
                    </TouchableOpacity>
                </View>
            
            </View>

            <View style={styles.body}>
                <FlatList 
                    style={styles.items}
                    data={items}
                    renderItem={({ item }) => {
                        return <ListItem item={item} />
                    }}
                    keyExtractor={() => `list-item-${Math.random() * 200}`}
                />
                <TouchableOpacity style={styles.confirmBtn} onPress={() => formHandlers.handleAddList()}>
                    <Text style={styles.confirmBtnText}>Add List</Text>
                </TouchableOpacity>
            </View>

        </>
    )
};

export default ListForm;

const styles = StyleSheet.create({
    inputHeader: {
        paddingTop: 0,
        paddingBottom: 16,
        marginTop: -12,
        borderBottomWidth: 2
    },
    inputContainer: {
        marginTop: 6,
        marginBottom: 6,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%',
        borderWidth: 2,
        borderRadius: 8,
        overflow: 'hidden'
    },
    input: {
        width: '87.5%',
        padding: 6,
        fontSize: 16
    },
    inputBtn: {
        width: '12.8%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#560bad'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        flex: 0.95,
    },
    items: {
        flex: 0.9,
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
    },
    confirmBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#560bad',
        alignSelf: 'center',
        width: '60%',
        borderRadius: 6,
        padding: 8
    },
    confirmBtnText: {
        color: '#FFFFFF',
        fontSize: 20
    }
})