

import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../firebase-config";



export const getDate = async (endpoint, limit, name) => {


    if (limit != 0 && limit != -1) {
        const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}?limit=${limit}`);
        const pokemons = response.json();
        return pokemons;
    }
    if (name) {
        const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}/${name}`);
        const pokemons = response.json();

        return pokemons;
    }

    if (limit == -1) {
        const response = await fetch(`${endpoint}`);
        const pokemons = response.json();
        return pokemons;
    }

}


export const getDataFireStore = async (endpoint) => {
    let docArray = []
    const querySnapshot = await getDocs(collection(db, endpoint));

    querySnapshot.forEach((doc) => {
        docArray.push(doc.data());
    });
    return docArray;
}

export const getDataFireStoreId = async (endpoint,id) => {
    let data;
    const docRef = doc(db, endpoint, id);


    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  
  data = docSnap.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

    return data;
}