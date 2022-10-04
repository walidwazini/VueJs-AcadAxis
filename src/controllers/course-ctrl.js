import firebase from "firebase/app";

import firebaseApp from '../firebase'

const db = firebaseApp.collection('/courses')

class CoursesControllers {

  getAll() {
    return db.orderBy('createdAt', 'desc')
  }

  create(newCourse) {
    const courseDetails = {
      ...newCourse,
      createdAt: firebase.firestore.Timestamp.now(),
    }
    return db.add(courseDetails)
  }

  update(id, details) {
    return db.doc(id).update(details)
  }
}

export default new CoursesControllers()