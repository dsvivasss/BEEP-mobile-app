/* eslint-disable */

import React from 'react'
import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native';

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <View style={[styles.container, { marginTop: 10 }]}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>
                    Beep!
                </Text>
                <Image source={require('../../assets/img1.png')} />
            </View>

            <View style={[styles.subContainer, { marginTop: 53 }]}>
                <Pressable onPress={() => navigate('/forgot')}>
                    <Text style={styles.text}>
                        Olvidaste tu contraseña
                    </Text>
                </Pressable>
            </View>

            <View style={[styles.subContainer, { marginTop: 22 }]}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigate('/home')}>
                    <Text style={styles.text}>Iniciar sesión</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => navigate('/home')}>
                    <Text style={styles.text}>Continúa con Apple</Text>
                </Pressable>
            </View>

            <View style={[styles.subContainer, { marginTop: 53 }]}>
                <Pressable onPress={() => navigate('/register')}>
                    <Text style={styles.text}>
                        ¿No tienes una cuenta? Regístrate
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
});

export default LoginPage