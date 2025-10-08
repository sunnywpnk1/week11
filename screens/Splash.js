import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, ImageBackground } from 'react-native'
import { useEffect } from 'react'

import * as TodosModel from '../firebase/TodosModel'
import { useDispatch } from 'react-redux'
import {addTodo} from '../redux/todos/todosSlicer'
export const SplashScreen = ({navigation}) => {
    //const navigation = props.nav
    //const route = props.route
    const BGIMG = { uri: 'https://i.ibb.co/C1L3wSC/13186366-5125962.jpg' }

    const dispatch = useDispatch()

    const unsuccess = (error) =>{
        console.log(`CAn not get data from firebase because ${error}`)
    }

    //ดรียกได้แล้วเก็บเข้าไปใน redux
    const success = (doc) =>{
        dispatch(addTodo({
            id:doc.id,
            task:doc.data().task
        }))
    }

    const loadUser2Redux = (doc_id) =>{
        //add user in redux
    }


    useEffect(() => {
        //TodosModel.geteUserByEmail("sunnywpnk@gmail.com",success,unsuccess)
        TodosModel.getUserRefID("sunnywpnk@gmail.com",loadUser2Redux,unsuccess)
        setTimeout(() => {
            navigation.navigate('MainDrawer')
            // navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
        }, 2500)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={BGIMG} resizeMode='cover' style={styles.welcome}>
                <Text style={styles.welcomeText}>I love React-Native</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    welcomeText: {
        fontSize: 50,
        fontWeight: '900',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
})