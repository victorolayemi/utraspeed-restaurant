// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyD89kl6bSFnwCF0UOvidOryfG4T48ynsUs",
  authDomain: "food-grocery-order.firebaseapp.com",
  databaseURL: "https://food-grocery-order.firebaseio.com",
  projectId: "food-grocery-order",
  storageBucket: "food-grocery-order.appspot.com",
  messagingSenderId: "919621807942",
  appId: "1:919621807942:web:ee4bf65f159d6a3edfff47",
  measurementId: "G-50MX113MK2"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();