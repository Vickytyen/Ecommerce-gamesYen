    
import { collection, getDocs } from "@firebase/firestore";
import { doc, getDoc, } from "firebase/firestore";
import db from './firebaseConfig'
    
 export const fetchFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
        }));
        return dataFromFirestore;
    }

    export const getItemFromFirebase = async (idItem) => { 
        const docRef = doc(db, "products", idItem );
        const docSnap = await getDoc(docRef);

             if (docSnap.exists()) {
             console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
        console.log("No such document!");
  }
}


    