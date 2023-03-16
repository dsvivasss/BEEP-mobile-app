/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { Switch, Text, StyleSheet, View, Image, Pressable, ScrollView } from 'react-native'
import { useNavigate } from 'react-router-native';
import monthAsString from '../data/months';
import alarms from '../data/alarms';

const HomePage = () => {

    const navigate = useNavigate();
    const [alarmsState, setAlarmsState] = useState(alarms);

    const toggleSwitch = (id) => {

        const alarm = alarmsState.find((alarm) => alarm.id === id);
        alarm.active = !alarm.active;
        setAlarmsState([...alarmsState]);
    }

    // Get date as 'day of month'
    const date = new Date();
    const day = date.getDate();
    const month = monthAsString(date.getMonth() + 1);

    return (
        <ScrollView>

            <View style={[styles.container, { marginTop: 50 }]}>

                <View style={[styles.subContainer, { marginTop: 0 }]}>
                    <Text style={styles.text1}>
                        Semana {day} de {month}
                    </Text>
                </View>

                <View style={[styles.subContainer, { marginTop: 15 }]}>
                    <Text style={styles.text}>
                        Estadísticas de la semana
                    </Text>
                </View>

                <View style={[styles.subContainerHor, { marginTop: 27 }]}>

                    <View style={[styles.subContainerVer, { marginRight: 31 }]}>

                        <View style={[styles.subContainerHor, { marginTop: 0 }]}>
                            <Text style={styles.text2}>
                                25
                            </Text>
                            <Image source={require('../../assets/Tinder.png')} />
                        </View>

                        <Text style={styles.text}>
                            Sentadillas
                        </Text>

                    </View>

                    <View style={[styles.subContainerVer, { marginTop: 0 }]}>

                        <View style={[styles.subContainerHor, { marginTop: 0 }]}>
                            <Text style={styles.text2}>
                                1250
                            </Text>
                            <Image source={require('../../assets/Tinder.png')} />
                        </View>

                        <Text style={styles.text}>
                            Puntos
                        </Text>

                    </View>
                </View>

                <View style={[styles.subContainer, { marginTop: 45 }]}>
                    <Pressable
                        style={styles.button}
                        onPress={() => navigate('/create')}>
                        <Text style={styles.text}>Cree nueva alarma</Text>
                    </Pressable>
                </View>

                <View style={[styles.subContainer, { marginTop: 58 }]}>
                    <Text style={[styles.text, { color: '#60D4FE', marginLeft: -100 }]}>
                        Alarmas recientes
                    </Text>
                </View>

                <View style={[styles.subContainer, { marginTop: 0 }]}>
                    {
                        alarmsState.map((alarm) => (
                            <View key={alarm.id} style={[styles.alarm, { marginTop: 15 }]}>

                                <View style={[styles.subContainerVer, { marginTop: 0}]}>
                                    <Text style={[styles.text2, { color: '#60D4FE' }]}>
                                        {alarm.time} {alarm.type}
                                    </Text>

                                    <View style={[styles.subContainerHor]}>
                                        {
                                            alarm.days.map((day) => (
                                                <Text key={day.day} style={styles.text3}>
                                                    {day.short},
                                                </Text>
                                            ))
                                        }
                                    </View>
                                </View>

                                <Switch
                                    trackColor={{ false: '#fff', true: 'rgba(34, 149, 255, 0.7)' }}
                                    thumbColor={alarm.active ? '#fff' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => toggleSwitch(alarm.id)}
                                    value={alarm.active}
                                />
                            </View>
                        ))
                    }
                </View>

            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainerHor: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    subContainerVer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    alarm: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#003545',
        padding: 10,
        elevation: 2,
        width: 330,
        marginTop: 20,
        borderRadius: 13,
    },
    title: {
        fontFamily: 'Lustria',
        fontWeight: 'normal',
        fontSize: 96,
        lineHeight: 123,
        textAlign: 'center',
        color: '#56cbd4',
    },
    text1: {
        // fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 31,
        color: '#56DBC6',
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
    text2: {
        // fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 40,
        lineHeight: 52,
        color: '#56DBC6',
    },
    text3: {
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
        width: 155,
        height: 155,
        marginTop: 20,
        borderRadius: 155 / 2,
    },
});

export default HomePage