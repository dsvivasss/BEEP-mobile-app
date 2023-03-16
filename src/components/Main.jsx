/* eslint-disable */

import React from "react"
import { View, StyleSheet } from "react-native"
import { Route, Routes } from "react-router-native"
import LoginPage from "../pages/Login"
import HomePage from "../pages/Home"
import CreatePage from "../pages/Create"
import RepeatPage from "../pages/Repeat"
import RegisterPage from "../pages/Register"
import ForgotPage from "../pages/Forgot"
import { LinearGradient } from 'expo-linear-gradient';

const Main = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#003730', 'rgba(0, 53, 69, 0.95)', 'rgba(0, 31, 97, 0.71)']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >

                <Routes>

                    <Route path='/' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/forgot' element={<ForgotPage />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/create' element={<CreatePage />} />
                    <Route path='/repeat' element={<RepeatPage />} />

                </Routes>
            </LinearGradient>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'linear-gradient(0deg, rgba(216,206,244,1) 0%, rgba(13,62,71,1) 13%)',
        backgroundColor: 'rgb(216,206,244)',
        // padding: 20,
        // paddingVertical: 5
    },
    gradient: {
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    linearGradientTitle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        // fontFamily: 'Lustria',
        fontWeight: 'normal',
        fontSize: 96,
        lineHeight: 123,
        color: 'transparent',
        textAlign: 'center',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
    // language: {
    //     padding: 4,
    //     color: theme.colors.white,
    //     backgroundColor: theme.colors.primary,
    //     alignSelf: 'flex-start',
    //     marginVertical: 4,
    //     borderRadius: 4,
    //     overflow: 'hidden'
    // },
    // image: {
    //     width: 48,
    //     height: 48,
    //     borderRadius: 4
    // }
})

export default Main