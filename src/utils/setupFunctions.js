import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../services/firebase";

export const createItem = async (collectionName, item, callback) => {
  const ref = collection(db, `setup_${collectionName}`);
  await addDoc(ref, item);
  if (callback) callback();
};

export const getItems = (collectionName, setState) => {
  const ref = collection(db, `setup_${collectionName}`);
  const unsubscribe = onSnapshot(ref, (snapshot) => {
    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setState(items);
  });
  return unsubscribe;
};

export const deleteItem = async (collectionName, id) => {
  const ref = doc(db, `setup_${collectionName}`, id);
  await deleteDoc(ref);
};

export const updateItem = async (collectionName, id, data) => {
  const ref = doc(db, `setup_${collectionName}`, id);
  await updateDoc(ref, data);
};

export const itemExists = async (collectionName, name) => {
  const q = query(
    collection(db, `setup_${collectionName}`),
    where("name", "==", name.trim())
  );
  const snapshot = await getDocs(q);
  return !snapshot.empty;
};
