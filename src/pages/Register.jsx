/* eslint-disable */

import React from 'react'
import { Text, StyleSheet, View, Image, Pressable, TextInput } from 'react-native'
import { useNavigate } from 'react-router-native';

const RegisterPage = () => {

    const navigate = useNavigate();

    return (
        <View style={[styles.container, { marginTop: 10 }]}>
            <View style={styles.subContainer}>
                <Image source={require('../../assets/img2.png')} />
            </View>

            <View style={[styles.containerHor, { marginTop: 86 }]}>

                <TextInput
                    style={[styles.input, {width: 150}]}
                    placeholder="Ingrese su nombre"
                    placeholderTextColor="#A7C8FF"
                    keyboardType="text"
                />

                <TextInput
                    style={[styles.input, {width: 150}]}
                    placeholder="Ingrese su apellido"
                    placeholderTextColor="#A7C8FF"
                    keyboardType="text"
                />
            </View>

            <TextInput
                style={[styles.input, {width: 325}]}
                placeholder="Escriba su contraseña"
                placeholderTextColor="#A7C8FF"
                keyboardType="text"
                secureTextEntry={true}
            />

            <TextInput
                style={[styles.input, {width: 325}]}
                placeholder="Confirme su contraseña"
                placeholderTextColor="#A7C8FF"
                keyboardType="text"
                secureTextEntry={true}
            />

            <View style={[styles.subContainer, { marginTop: 22 }]}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigate('/home')}>
                    <Text style={styles.text}>Continúa con Google</Text>
                </Pressable>
            </View>

            <View style={[styles.subContainer, { marginTop: 53 }]}>
                <Pressable onPress={() => navigate('/')}>
                    <Text style={styles.text}>
                        ¿Ya tienes una cuenta? Inicia sesión
                    </Text>
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerHor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        // fontFamily: 'Lustria',
        fontWeight: 'normal',
        fontSize: 96,
        lineHeight: 123,
        textAlign: 'center',
        color: '#56cbd4',
    },
    text: {
        // fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        color: '#60D4FE',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(96, 212, 254, 0.22);',
        padding: 10,
        elevation: 2,
        borderWidth: 2,
        borderColor: '#60D4FE',
        width: 300,
        marginTop: 20,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: 'rgba(167, 200, 255, 0.22);',
        borderRadius: 5,
        color: '#A7C8FF',
    },
});

export default RegisterPage