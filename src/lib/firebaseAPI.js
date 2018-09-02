import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCJHsCAQneGSHL9SKHiv8s3fq74m5cKl6M',
    authDomain: 'test-dc053',
    projectId: 'test-dc053',
  })
}

const db = firebase.firestore()

const firebaseRealTimeUpdate = (receiveRealTimeMsgList) => {
  db.collection('messages')
    .orderBy('timeStamp', 'asc')
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      receiveRealTimeMsgList(data)
    })
}

const firebaseGetMsg = () => (
  db.collection('messages')
    .orderBy('timeStamp', 'asc')
    .get()
)
const firebaseSendMsg = data => (
  db.collection('messages')
    .add(data)
)

export { firebaseGetMsg, firebaseSendMsg, firebaseRealTimeUpdate }
