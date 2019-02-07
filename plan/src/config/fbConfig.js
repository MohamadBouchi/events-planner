import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    // apiKey: `${process.env.APIKEY}`,
    authDomain: `"${process.env.AUTHDOMAIN}"`,
    databaseURL: `"${process.env.DATABASEURL}"`,
    projectId: "react-plan-1ef15"
  };
  firebase.initializeApp(config);


  export default firebase;
