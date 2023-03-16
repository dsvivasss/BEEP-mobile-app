/* eslint-disable */

import React from 'react'
import { Text, StyleSheet, View, Image, Pressable, TextInput } from 'react-native'
import { useNavigate } from 'react-router-native';

const ForgotPage = () => {

    const navigate = useNavigate();

    return (
        <View style={[styles.container, { marginTop: 10 }]}>
            <View style={[styles.subContainer, { marginTop: 0 }]}>
                <Text style={styles.text1}>
                    ¿Olvidaste tu contraseña?
                </Text>
            </View>

            <View style={[styles.subContainer, { marginTop: 30 }]}>
                <Text style={styles.text2}>
                    Por favor ingresa tu correo electrónico
                </Text>
            </View>

            <TextInput
                style={[styles.input, { width: 325, marginTop: 45 }]}
                placeholder="Escriba su correo electrónico"
                placeholderTextColor="#A7C8FF"
                keyboardType="text"
            />

            <View style={[styles.subContainer, { marginTop: 45 }]}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigate('/')}>
                    <Text style={styles.text}>Enviar</Text>
                </Pressable>
            </View>

            <View style={[styles.subContainer, { marginTop: 45 }]}>
                <Pressable onPress={() => navigate('/')}>
                    <Text style={styles.text}>
                        Enviaremos un código a tu correo para reestablecer la contraseña
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
        textAlign: 'center',
    },
    text1: {
        // fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 31,
        color: '#56DBC6',
    },
    text2: {
        // fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 26,
        color: '#56DBC6',
        textAlign: 'center',
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
        // marginTop: 20,
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

export default ForgotPage