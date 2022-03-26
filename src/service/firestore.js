import  {initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyBTNLRPtp1seIE0MQQbrYuQGCkj036YMqE",
    authDomain: "codigo13-f2b33.firebaseapp.com",
    projectId: "codigo13-f2b33",
    storageBucket: "codigo13-f2b33.appspot.com",
    messagingSenderId: "900523751774",
    appId: "1:900523751774:web:c06784090f7d1228d8f7cf",
    measurementId: "G-M6VZD5E37T"
  };
  
  const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProductClothes = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map((doc) => doc.data());
  return clothes;
};