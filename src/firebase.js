// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUMr4oXvCkgZvA02iy3h81CltJESHp7fg',
  authDomain: 'twit-clone-4c069.firebaseapp.com',
  projectId: 'twit-clone-4c069',
  storageBucket: 'twit-clone-4c069.appspot.com',
  messagingSenderId: '260213207374',
  appId: '1:260213207374:web:1a3f8274b727832acf2e1f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
