import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const ListCard = ({ list }) => {

    const navigation = useNavigation();

    const navigateToScreen = () => {
        navigation.navigate('List', { list: list })
    };

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={() => navigateToScreen()}
        >
            <Text style={styles.text}>{list.name}</Text>
        </TouchableOpacity>
    )
};

export default ListCard;

const styles = StyleSheet.create({
    card: {
        width: '80%',
        borderWidth: 4,
        borderColor: '#560bad',
        borderRadius: 8,
        padding: 10,
        marginBottom: 6,
        alignSelf: 'center'
    },
    text: {
        color: '#560bad',
        fontSize: 18,
        fontWeight: 'bold'
    }
})