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
}

export default new CoursesControllers()