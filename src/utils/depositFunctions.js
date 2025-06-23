import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../services/firebase";

export const createDeposit = async (name, description) => {
  const response = await addDoc(collection(db, "deposits"), {
    name,
    description,
    creatAt: serverTimestamp(),
  });
  return response;
};

export const getDeposits = (setState) => {
  const collectionRef = collection(db, "deposits");
  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    const deposits = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setState(deposits);
  });

  return unsubscribe;
};

export const updateDeposit = async (id, data) => {
  const response = doc(db, "deposits", id);
  await updateDoc(response, data);
};

export const deleteDeposit = async (id) => {
  const ref = doc(db, "deposits", id);
  await deleteDoc(ref);
};

export const checkDepositName = async (name) => {
  const depositsRef = collection(db, "deposits");
  const q = query(depositsRef, where("name", "==", name));
  const querySnapshot = await getDocs(q);

  return !querySnapshot.empty;
};
