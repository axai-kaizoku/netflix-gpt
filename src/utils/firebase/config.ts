// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC858VIVUcF-taArqxfVN41FClqZlRWY-E',
	authDomain: 'netflixgpt-d7658.firebaseapp.com',
	projectId: 'netflixgpt-d7658',
	storageBucket: 'netflixgpt-d7658.firebasestorage.app',
	messagingSenderId: '348516674069',
	appId: '1:348516674069:web:80b7100ab00f8084203c1c',
	measurementId: 'G-890TMPCWZY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
