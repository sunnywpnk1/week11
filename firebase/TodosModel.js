import todosApp from './Connect'
import {
    getFirestore,collection,query,getDocs,
    orderBy,limit,where,addDoc, doc,updateDoc, deleteDoc
} from 'firebase/firestore'

import { createSlicer } from '@reduxjs/toolkit'
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
        qrySnapshot.forEach((doc)=>{
            console.log(`Doc: ${doc.id} => task: ${doc.data().task}`)
            success(doc)
        })
    }catch(e){
        unsuccess(e)
    }
    
}

export const geteUserByEmail = async(email,success,unsuccess) => {

    console.log(`email: ${email}`)
    let userRefID 
    try{
         let qry = query(userColl,where('email','==',email))
   let qrySnapshot = await getDocs(qry)
    qrySnapshot.forEach((doc)=>{
        userRefID = doc.ref
    })
    console.log(`userRefID: ${userRefID}`)
    qry = query(todosColl,where('user_id','==',userRefID))
    qrySnapshot = await getDocs(qry)
    qrySnapshot.forEach((doc)=>{
        success(doc)
    })

    }catch(e){
        unsuccess(e)
    }
   
}

export const addTask = async(newtask,users,success,unsuccess) => {
        console.log(`newtask: ${newtask}`)
        console.log(`user_id: ${users[0].user_id}`)

        const docData = {
            task:newtask, //string
            user_id:users[0].user_id, //obj type ref.
            status:false, //boolean

        }
        try{
            const docRef = await addDoc(todosColl,docData)
            console.log(`Doc Ref: ${docRef.id}`)
            success(docRef)
        }catch(e){
            unsuccess(e)
        }
}

export const getUserRefID = async(email,success,unsuccess) => {

    console.log(`email: ${email}`)
    let userRefID 
    try{
         let qry = query(userColl,where('email','==',email))
   let qrySnapshot = await getDocs(qry)
    qrySnapshot.forEach((doc)=>{
        userRefID = doc.ref
    })
    console.log(`userRefID: ${userRefID}`)
    success(userRefID)

    }catch(e){
        unsuccess(e)
    }
   
}