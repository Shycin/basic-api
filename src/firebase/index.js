// Import the functions you need from the SDKs you need
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const admin = require("firebase-admin");

var serviceAccount = require("../../onmyroad-348c8-firebase-adminsdk-s8i8t-3534b655ff.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

module.exports = db