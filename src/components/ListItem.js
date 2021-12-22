import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ item }) => {

    return (
        <View style={[ styles.item, {borderColor: item.completed ? '#00b4d8' : '#d00000'} ]}>
            <Text style={[ styles.text, {color: item.completed ? '#00b4d8' : '#d00000'} ]}>
                {item.item}
            </Text>
        </View>
    )
};

export default ListItem;

const styles = StyleSheet.create({
    item: {
        borderWidth: 4,
        borderRadius: 8,
        padding: 6,
        marginBottom: 4,
        width: '90%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});