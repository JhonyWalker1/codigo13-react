import  {initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc,deleteDoc } from "firebase/firestore/lite";
import {v4 as uuidv4} from "uuid";

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

// debemos crear una funcion que se encargue de poder crear elementos en la base de datos
// ojo: vamos a recibir un parametro un objeto
// que contenga la informacion del producto que estamos creando
export const storeProductClothe = async (product) => {
  const id= uuidv4().replaceAll("-","")
  product.id=id;
  await setDoc(doc(db, "product_clothes",id ), product);
};

// para poder actualizar un dato en firebase
export const updateProductClothe = async (id,product) => {
  const productRef = doc(db, "product_clothes", id);
  await updateDoc(productRef, product);
}

export const deleteProductClothe = async (id) => {
  await deleteDoc(doc(db, "product_clothes", id));
}