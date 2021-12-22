import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true
});

storage.sync = {
    async list(params) {
        let { id } = params;

        const res = await fetch(`list/?id=${id}`);
        const resText = await res.text();

        console.log(`list ${id} sync res: ${resText}`);

        const json = JSON.parse(resText);

        if (json && json.list) {
            storage.save({
                key: 'list',
                id: id,
                data: json.list
            });
            return json.list;
        } else {
            console.log('error syncing list id: ', id);
            return null;
        }
    }
};

export const saveToStorage = async (data) => {
    console.log('saving to storage...')
    storage.save({
        key: 'list',
        id: data.id,
        data: data,
        expires: null
    })
};

export const updateByIdToStorage = async (id, data) => {
    storage.save({
        key: 'list',
        id: id,
        data: data
    })
};

export const fetchListsFromStorage = async () => {
    const lists = await storage.getAllDataForKey('list');

    return lists;
};

export const removeListFromStorage = async (id) => {
    console.log('removing from storage...');
    storage.remove({
        key: 'list',
        id: id
    })
}

export const clearStorage = async () => {
    storage.clearMap();
}