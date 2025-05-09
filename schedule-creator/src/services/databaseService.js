// NEW FILE: src/services/databaseService.js
import { 
    collection, 
    doc, 
    setDoc, 
    addDoc, 
    getDoc, 
    getDocs, 
    query, 
    where, 
    updateDoc, 
    deleteDoc 
  } from 'firebase/firestore';
  import { db } from '../firebase/firebase';
  
  // People Collection
  export const savePerson = async (userId, personData) => {
    try {
      // If the person has an ID, update them
      if (personData.id) {
        const personRef = doc(db, 'users', userId, 'people', personData.id);
        await setDoc(personRef, personData, { merge: true });
        return personData.id;
      } 
      // Otherwise create a new person
      else {
        const peopleRef = collection(db, 'users', userId, 'people');
        const docRef = await addDoc(peopleRef, personData);
        return docRef.id;
      }
    } catch (error) {
      console.error("Error saving person: ", error);
      throw error;
    }
  };
  
  export const getPeople = async (userId) => {
    try {
      const peopleRef = collection(db, 'users', userId, 'people');
      const querySnapshot = await getDocs(peopleRef);
      
      const people = [];
      querySnapshot.forEach((doc) => {
        people.push({ id: doc.id, ...doc.data() });
      });
      
      return people;
    } catch (error) {
      console.error("Error getting people: ", error);
      throw error;
    }
  };
  
  export const deletePerson = async (userId, personId) => {
    try {
      await deleteDoc(doc(db, 'users', userId, 'people', personId));
    } catch (error) {
      console.error("Error deleting person: ", error);
      throw error;
    }
  };
  
  // Availability Collection
  export const saveAvailability = async (userId, availability) => {
    try {
      if (availability.id) {
        const availabilityRef = doc(db, 'users', userId, 'availability', availability.id);
        await setDoc(availabilityRef, availability, { merge: true });
        return availability.id;
      } else {
        const availabilityRef = collection(db, 'users', userId, 'availability');
        const docRef = await addDoc(availabilityRef, availability);
        return docRef.id;
      }
    } catch (error) {
      console.error("Error saving availability: ", error);
      throw error;
    }
  };
  
  export const getAvailabilityByPerson = async (userId, personId) => {
    try {
      const availabilityRef = collection(db, 'users', userId, 'availability');
      const q = query(availabilityRef, where("personId", "==", personId));
      const querySnapshot = await getDocs(q);
      
      const availabilityList = [];
      querySnapshot.forEach((doc) => {
        availabilityList.push({ id: doc.id, ...doc.data() });
      });
      
      return availabilityList;
    } catch (error) {
      console.error("Error getting availability: ", error);
      throw error;
    }
  };
  
  export const getAllAvailability = async (userId) => {
    try {
      const availabilityRef = collection(db, 'users', userId, 'availability');
      const querySnapshot = await getDocs(availabilityRef);
      
      const availabilityList = [];
      querySnapshot.forEach((doc) => {
        availabilityList.push({ id: doc.id, ...doc.data() });
      });
      
      return availabilityList;
    } catch (error) {
      console.error("Error getting all availability: ", error);
      throw error;
    }
  };
  
  export const deleteAvailability = async (userId, availabilityId) => {
    try {
      await deleteDoc(doc(db, 'users', userId, 'availability', availabilityId));
    } catch (error) {
      console.error("Error deleting availability: ", error);
      throw error;
    }
  };