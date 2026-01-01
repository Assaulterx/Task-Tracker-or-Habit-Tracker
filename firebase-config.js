// ===== FIREBASE CONFIGURATION =====
// REPLACE THESE VALUES WITH YOUR FIREBASE PROJECT CREDENTIALS
// Get these from: Firebase Console → Project Settings → Your apps → Web

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    databaseURL: "YOUR_DATABASE_URL_HERE",
    projectId: "YOUR_PROJECT_ID_HERE",
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_APP_ID_HERE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references
const database = firebase.database();
const auth = firebase.auth();

// Export for use in main app
window.firebaseDB = database;
window.firebaseAuth = auth;
