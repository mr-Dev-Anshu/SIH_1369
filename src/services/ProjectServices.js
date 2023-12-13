import { db } from '../firebase-config';

// import remaining = getDoc, updateDoc, deletDoc, doc

import {
  collection,
  getDocs,
  addDoc,
 } from "firebase/firestore";

const ProjectCollectionRef = collection(db, "Projects");

class ProjectDataService {
  addProject = (newProject) => {
    return addDoc(ProjectCollectionRef, newProject);
  };
  getAllProjects = () => {
    return getDocs(ProjectCollectionRef);
  };
}

export default new ProjectDataService();