/* eslint-disable */

import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        marginTop: 27,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 16,
        height: 200,
        // backgroundColor: "#0a3c45",
    },
    daysContainer: {
        paddingVertical: 26,
        marginTop: 29,
        marginLeft: 20,
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-around",
        width: "90%",
        paddingHorizontal: 16,
        backgroundColor: "rgba(96, 212, 254, 0.22);",
        borderRadius: 13,
    },
    buttonDays: {
        // marginTop: 23,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: "#60D4FE",
        width: 320,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(96, 212, 254, 0.22);',
        padding: 10,
        elevation: 2,
        borderWidth: 2,
        borderColor: '#60D4FE',
        width: '100%',
        marginTop: 42,
    },
    text: {
        // fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 26,
        color: '#56DBC6',
        textAlign: 'center',
    },
});

function RepeatPage() {

    const navigate = useNavigate();

    return (
        <View style={[{ marginTop: 53 }]}>

            <View style={[{ marginTop: 0, marginLeft: 20 }]} >
                <Pressable
                    onPress={() => navigate('/create')}>
                    <Image source={require('../../assets/higherthan.png')} />
                </Pressable>

            </View>


            <View style={styles.daysContainer}>
                <View style={[{ marginTop: 0 }]} >
                    <Pressable
                        style={styles.buttonDays}
                    >
                        <Text style={[styles.text, { color: '#60D4FE' }]}>
                            Domingo
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.buttonDays}
                    >
                        <Text style={[styles.text, { color: '#60D4FE' }]}>
                            Lunes
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.buttonDays}
                    >
                        <Text style={[styles.text, { color: '#60D4FE' }]}>
                            Martes
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.buttonDays}
                    >
                        <Text style={[styles.text, { color: '#60D4FE' }]}>
                            Miércoles
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.buttonDays}
                    >
                        <Text style={[styles.text, { color: '#60D4FE' }]}>
                            Jueves
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.buttonDays}
                    >
                        <Text style={[styles.text, { color: '#60D4FE' }]}>
                            Viernes
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.buttonDays}
                    >
                        <Text style={[styles.text, { color: '#60D4FE' }]}>
                            Sábado
                        </Text>
                    </Pressable>

                </View>
            </View>

        </View>
    );
}

export default RepeatPage;