import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9op9Ea07h3hRZYYFZ_JYrbHDYe4uUtAg",
  authDomain: "todo-vue-c18eb.firebaseapp.com",
  projectId: "todo-vue-c18eb",
  storageBucket: "todo-vue-c18eb.appspot.com",
  messagingSenderId: "274790127847",
  appId: "1:274790127847:web:cd50e68972419919a22a42"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    db
}