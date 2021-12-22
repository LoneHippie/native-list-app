import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { useDispatch } from 'react-redux';
import { removeList } from '../redux/lists';

import ListItem from '../components/ListItem';

import Icon from 'react-native-vector-icons/FontAwesome';

const ListScreen = ({ route, navigation }) => {

    const list = route.params.list;
    const dispatch = useDispatch();

    // console.log(list);

    const listHandlers = {
        deleteList: () => {
            dispatch(removeList(list));
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.items}
                data={list.items}
                keyExtractor={() => `item-list-${Math.random() * 200}`}
                renderItem={({ item }) => {
                    return (
                        <ListItem item={item} />
                    )
                }}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => listHandlers.deleteList()}
                >
                    <Text style={styles.btnText}>Delete <Icon name={'close'} size={20} /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Completed <Icon name={'check'} size={20} /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default ListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 12
    },
    items: {
        flex: 0.85
    },  
    buttonContainer: {
        flex: 0.15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#560bad',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 10,
        minWidth: '40%'
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

// function invertBinaryTree({ left, right }) {
//     let left = left;
//     let right = right;
    
//     right = left;
//     left = right;

//     intervertBinaryTree(left);
//     intervertBinaryTree(right);
// }

// const invert = (node) => { if (node) { [ node.left, node.right ] = [ node.right, node.left ]  } else { return } invert(node.left); invert(node.right); }

// const invert = (node) => {
//     [ node.left, node.right ] = [ node.right, node.left ];
//     invert(node.left);
//     invert(node.right);
// };

// const invertNodes = (node) => node ?? invertNodes(invert(node));