import firebase from "firebase/app";

import firebaseApp from '../firebase'

const db = firebaseApp.collection('/courses')

class CoursesControllers {

  create(newCourse) {
    const courseDetails = {
      ...newCourse,
      createdAt: firebase.firestore.Timestamp.now(),
    }
    return db.add(courseDetails)
  }
}

export default new CoursesControllers()