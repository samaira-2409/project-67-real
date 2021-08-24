import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBRW8nhWz-YZpkLU2gCM-XZoDykl6-6twQ",
    authDomain: "project-67-3964d.firebaseapp.com",
    projectId: "project-67-3964d",
    storageBucket: "project-67-3964d.appspot.com",
    messagingSenderId: "781380962714",
    appId: "1:781380962714:web:fd5ef45cd02b1806bb9223"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();