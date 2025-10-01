import todosApp from './Connect'
import {
    getFirestore,collection,query,getDocs,
    orderBy,limit,where,addDoc, doc,updateDoc, deleteDoc
} from 'firebase/firestore'

// เป็น pointer ที่คอยควบการทำงานที่เห็นภาพทั้งหมดใน database
const db = getFirestore(todosApp)
const todosColl = collection(db,'todos') 
const userColl = collection(db,'users')

//ดึงข้อมูลทั้งหมดใน todo แบบไม่มีเงื่อนไข ,จะมี async/await
export const getAllTodos = async(success,unsuccess) => {
    console.log(`getAllTodos active`)
    try{
        const qry = query(todosColl) //todosColl ทำหน้าที่คล้าย pointer
        const qrySnapshot = await getDocs(qry)
        //loop all item
        
    }catch(e){
        unsuccess()
    }
    
}