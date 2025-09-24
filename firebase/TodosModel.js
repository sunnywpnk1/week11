import todosApp from './Connect'
import {
    getFirestore,collection,query,getDocs,
    orderBy,limit,where,addDoc, doc,updateDoc, deleteDoc
} from 'firebase/firestore'

// เป็น pointer ที่คอยควบการทำงานที่เห็นภาพทั้งหมดใน database
const db = getFirestore(todosApp)
//
const todosColl = collection(db,'todos') 
const userColl = collection(db,'users')