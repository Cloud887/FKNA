import uuid from 'uuid/v1';

require('dotenv').load();
const admin = require('firebase-admin');

const firebaseKey =
  process.env.NODE_ENV === 'production'
    ? JSON.parse(process.env.FBASE_ADMIN_PRIVATE_KEY)
    : process.env.FBASE_ADMIN_PRIVATE_KEY;

const key = uuid();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FBASE_PROJECT_ID,
    clientEmail: process.env.FBASE_ADMIN_CLIENT_EMAIL,
    privateKey: firebaseKey,
    databaseAuthVariableOverride: {
      uid: 'read-only',
    },
  }),
  databaseURL: process.env.FIREBASE_URL,
});

module.exports = { admin, key };
