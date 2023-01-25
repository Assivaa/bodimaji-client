import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqjLtDMCFUC57ByHV0rziDICJQE8xGxXg",
  authDomain: "bodimaji-project.firebaseapp.com",
  projectId: "bodimaji-project",
  storageBucket: "bodimaji-project.appspot.com",
  messagingSenderId: "548161151203",
  appId: "1:548161151203:web:39bb58775e452f9996a5d6",
  measurementId: "G-XHGP4JLRPE",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
