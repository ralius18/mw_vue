import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

export const firebaseApp = initializeApp({
  apiKey: firebaseConfig.API_KEY,
  authDomain: firebaseConfig.AUTH_DOMAIN,
  projectId: firebaseConfig.PROJECT_ID,
  storageBucket: firebaseConfig.STORAGE_BUCKET,
  messagingSenderId: firebaseConfig.MESSAGING_SENDER_ID,
  appId: firebaseConfig.APP_ID
})

export const db = getFirestore(firebaseApp)

export const showsRef = collection(db, 'shows')
