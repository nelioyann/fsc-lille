import { Storage, Drivers } from "@ionic/storage";

var storage: Storage 

export const createStore = (name = "__mydb") => {
    storage = new Storage({    
        name,
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    });
    storage.create();
}


export const set = (key: string, value: any) => {
    storage.set(key, value);
}

export const get = async (key: string) => {
    const value = await storage.get(key);
    return value;
}

export const remove = async (key: string) => {
    await storage.remove(key);
}

export const clear = async () => {
    await storage.clear();
}

/**
 * Update an object from an array
 * ex: fruits: [{id: "apple", name: "apple"}, {id: "orange", name: "orange"}]
 * @param key ex: fruits
 * @param id ex: "apple"
 * @param value ex: { id: "apple", name: "pink lady"}
 */
export const setObject = async (key: string, id: string, value: any) => {
    const all = await storage.get(key);
    const objIndex = await all.findIndex((a: { id: string; }) => parseInt(a.id) === parseInt(id));
    all[objIndex] = value;
    set(key, all);
}

export const removeObject = async (key: string, id: string) => {
    const all = await storage.get(key);
    const objIndex = await all.findIndex((a: { id: string; }) => parseInt(a.id) === parseInt(id));
    all.splice(objIndex, 1);
    set(key, all);
}

/**
 * Get an object from an array
 * ex: fruits: [{id: "apple", name: "apple"}, {id: "orange", name: "orange"}]
 * @param key  The name of your entries
 * @param id The identifier id of the target entry
 * @returns The target entry with the corresponding id
 */
export const getObject = async (key: string, id: string) => {
    const all = await storage.get(key);
    const obj = await all.filter((target: { id: string }) => target.id === id)[0];
    return obj;
}


// import { useEffect } from 'react';
// import { createStore, get, set } from './data/IonicStorage';
// import { getMessages } from './data/messages';
// const toPutInAppjs = () => {

//     useEffect(() => {
    
//         const setupStore = async () => {
    
//             await createStore("AlansDB");
//             const exists = await get("msgs");
    
//             if (!exists) {
                
//                 const msgs = getMessages();
//                 set("msgs", msgs);
//             }
//         }
    
//         setupStore();
//     }, []);
// }

// function useStorage(name: string) {
//     var storage: Storage 
// }