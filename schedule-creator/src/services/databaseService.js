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

// Enhanced savePerson with timeout handling and retries
export const savePerson = async (userId, personData) => {
  // Set up retry logic
  const maxRetries = 3;
  let retryCount = 0;
  let lastError = null;

  // First, validate inputs
  if (!userId) {
    throw new Error('User ID is required');
  }

  if (!personData) {
    throw new Error('Person data is required');
  }

  // Clone the data to avoid mutation issues
  const dataToSave = { ...personData };
  
  // Add timestamps if they don't exist
  if (!dataToSave.createdAt) {
    dataToSave.createdAt = new Date().toISOString();
  }
  dataToSave.updatedAt = new Date().toISOString();

  // Retry loop
  while (retryCount < maxRetries) {
    try {
      console.log(`Attempt ${retryCount + 1} to save person:`, dataToSave.name);
      
      // If the person has an ID, update them
      if (dataToSave.id) {
        const personRef = doc(db, 'users', userId, 'people', dataToSave.id);
        
        // Use Promise.race with a timeout to avoid hanging
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Database operation timed out (10s)')), 10000)
        );
        
        await Promise.race([
          setDoc(personRef, dataToSave),
          timeoutPromise
        ]);
        
        console.log(`Successfully updated person: ${dataToSave.name}`);
        return dataToSave.id;
      } 
      // Otherwise create a new person
      else {
        const peopleRef = collection(db, 'users', userId, 'people');
        
        // Use Promise.race with a timeout to avoid hanging
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Database operation timed out (10s)')), 10000)
        );
        
        const docRef = await Promise.race([
          addDoc(peopleRef, dataToSave),
          timeoutPromise
        ]);
        
        console.log(`Successfully created new person: ${dataToSave.name} with ID: ${docRef.id}`);
        return docRef.id;
      }
    } catch (error) {
      lastError = error;
      console.error(`Error saving person (attempt ${retryCount + 1}): `, error);
      
      // Only retry for certain types of errors (network, timeout)
      if (error.code === 'unavailable' || 
          error.message.includes('timeout') || 
          error.code === 'resource-exhausted' ||
          error.code === 'network-request-failed') {
        retryCount++;
        // Exponential backoff
        const backoffTime = 1000 * Math.pow(2, retryCount);
        console.log(`Retrying in ${backoffTime/1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, backoffTime));
        continue;
      }
      
      // If not a retryable error, throw immediately
      throw error;
    }
  }
  
  // If we've exhausted retries
  throw lastError || new Error('Failed to save after multiple attempts');
};

// Other functions remain the same
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