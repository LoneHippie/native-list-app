import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import ListCard from './ListCard';

const Lists = ({ lists }) => {

    return (
        <>
            {
                lists.status === 'idle' && lists.data.length ? (
                    <View style={styles.listContainer}>
                        <FlatList
                            data={lists.data}
                            keyExtractor={() => `list-${Math.random() * 200}`}
                            renderItem={({ item }) => {
                                return (
                                    <ListCard list={item} />
                                )
                            }}
                        />
                    </View>
                ) : (
                    <View style={styles.listsEmpty}>
                        <Text style={styles.listsEmptyTitle}>No unfinished lists left</Text>
                    </View>
                )
            }
        </>
    )
};

export default Lists;

const styles = StyleSheet.create({
    listsEmpty: {
        display: 'flex',
        flex: 0.85,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listsEmptyTitle: {
        color: '#2C2C2C',
        fontSize: 25
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 0.85
    }
});