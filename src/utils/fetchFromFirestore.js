    
import { collection, getDocs, query, orderBy, where } from "@firebase/firestore";
import { doc, getDoc, } from "firebase/firestore";
import db from './firebaseConfig'
    
    export const fetchFromFirestore = async (idCategory) => {
      let q;
      if (idCategory) {
        q = query(
          collection(db, "products"),
          where("idCategory", "==", idCategory)
        );
      } else {
        q = query(collection(db, "products"), orderBy("name"));
      }
      const querySnapshot = await getDocs(q);
      const dataFromFireStore = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      return dataFromFireStore;
    };

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


    