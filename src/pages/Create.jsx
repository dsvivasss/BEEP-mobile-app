/* eslint-disable */

import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Pressable, Image } from "react-native";
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
        marginLeft: 20,
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-around",
        width: "90%",
        paddingHorizontal: 16,
        height: 200,
        backgroundColor: "rgba(96, 212, 254, 0.22);",
        borderRadius: 13,
    },
    buttonDays: {
        marginTop: 23,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: "#60D4FE",
        paddingBottom: 12,
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
    overlay: {
        position: 'absolute',
        width: '90%',
        height: 50,
        backgroundColor: 'rgba(86, 219, 198, 0.22)',
        borderRadius: 13,
    },
    overlay2: {
        position: 'absolute',
        width: '90%',
        height: 50,
        marginLeft: -125,
        backgroundColor: 'rgba(86, 219, 198, 0.22)',
        borderRadius: 13,
    },
    arrowContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        // backgroundColor: "#BDBDBD",
        alignItems: "center",
        justifyContent: "center",
    },
    arrowText: {
        // fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 40,
        lineHeight: 52,
        color: '#56DBC6',
    },
    column: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    numberContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: "100%",
    },
    numberText: {
        // fontSize: 24,
        // fontWeight: "bold",
        // color: "#424242",
        // fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 40,
        lineHeight: 52,
        color: '#56DBC6',
    },
    selectedNumberText: {
        fontSize: 36,
        fontWeight: "bold",
        // color: "#FF6F00",
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
});

function NumberScroll() {

    const navigate = useNavigate();

    const [selectedHour, setSelectedHour] = useState(0);
    const [selectedMinute, setSelectedMinute] = useState(0);
    const [selectedRepetition, setSelectedRepetition] = useState(0);
    const [selectedAmPm, setSelectedAmPm] = useState("AM");

    const handleHourScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const newSelectedHour = Math.round(offsetY / 80);
        setSelectedHour(newSelectedHour);
    };

    const handleMinuteScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const newSelectedMinute = Math.round(offsetY / 80);
        setSelectedMinute(newSelectedMinute);
    };

    const handleRepetitionScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const newSelectedRepetition = Math.round(offsetY / 80);
        setSelectedRepetition(newSelectedRepetition);
    };

    const handleAmPmScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const newSelectedAmPm = offsetY < 10 ? "AM" : "PM";
        setSelectedAmPm(newSelectedAmPm);
    };

    const handleClickHourNext = () => {
        setSelectedHour((selectedHour + 1) % 12);
    };

    const handleClickHourPrev = () => {
        setSelectedHour((selectedHour - 1 + 12) % 12);
    };

    const handleClickMinuteNext = () => {
        setSelectedMinute((selectedMinute + 1) % 60);
    };

    const handleClickMinutePrev = () => {
        setSelectedMinute((selectedMinute - 1 + 60) % 60);
    };

    const handleClickAmPmNext = () => {
        setSelectedAmPm(selectedAmPm === "AM" ? "PM" : "AM");
    };

    const handleClickAmPmPrev = () => {
        setSelectedAmPm(selectedAmPm === "AM" ? "PM" : "AM");
    };

    return (
        <View style={[{ marginTop: 53 }]}>

            <View style={[{ marginTop: 0, marginLeft: -250 }]} >
                <Pressable
                    onPress={() => navigate('/home')}>
                    <Text style={styles.text}>
                        Cancelar
                    </Text>
                </Pressable>

            </View>

            <View style={styles.marginContainer}>
                <View style={styles.container}>
                    <View style={styles.overlay} />
                    <View style={styles.columnContainer}>
                        <TouchableOpacity onPress={handleClickHourPrev} style={styles.arrowContainer}>
                            <Text style={styles.arrowText}></Text>
                        </TouchableOpacity>
                        <ScrollView onScroll={handleHourScroll} scrollEventThrottle={16}>
                            {[...Array(12).keys()].map((hour) => (
                                <View key={hour} style={styles.numberContainer}>
                                    <Text
                                        style={hour === selectedHour ? styles.selectedNumberText : styles.numberText}
                                    >
                                        {hour + 1}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                        <TouchableOpacity onPress={handleClickHourNext} style={styles.arrowContainer}>
                            <Text style={styles.arrowText}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.columnContainer}>
                        <TouchableOpacity onPress={handleClickMinutePrev} style={styles.arrowContainer}>
                            <Text style={styles.arrowText}></Text>
                        </TouchableOpacity>
                        <ScrollView onScroll={handleMinuteScroll} scrollEventThrottle={16}>
                            {[...Array(60).keys()].map((minute) => (
                                <View key={minute} style={styles.numberContainer}>
                                    <Text
                                        style={
                                            minute === selectedMinute ? styles.selectedNumberText : styles.numberText
                                        }
                                    >
                                        {minute < 10 ? `0${minute}` : minute}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                        <TouchableOpacity onPress={handleClickMinuteNext} style={styles.arrowContainer}>
                            <Text style={styles.arrowText}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.columnContainer}>
                        <TouchableOpacity onPress={handleClickAmPmPrev} style={styles.arrowContainer}>
                            <Text style={styles.arrowText}></Text>
                        </TouchableOpacity>
                        <ScrollView onScroll={handleAmPmScroll} scrollEventThrottle={16}>
                            <View style={styles.numberContainer}>
                                <Text style={selectedAmPm === "AM" ? styles.selectedNumberText : styles.numberText}>AM</Text>
                            </View>
                            <View style={styles.numberContainer}>
                                <Text style={selectedAmPm === "PM" ? styles.selectedNumberText : styles.numberText}>PM</Text>
                            </View>
                        </ScrollView>
                        <TouchableOpacity onPress={handleClickAmPmNext} style={styles.arrowContainer}>
                            <Text style={styles.arrowText}></Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <View style={[{ marginTop:  47}]} >
                <Text style={styles.text}>
                    Configure número de repeticiones de sentadilla
                </Text>

            </View>

            <View style={styles.marginContainer}>
                <View style={styles.container}>
                    <View style={styles.overlay2} />
                    <View style={styles.columnContainer}>
                        <TouchableOpacity style={styles.arrowContainer}>
                            <Text style={styles.arrowText}></Text>
                        </TouchableOpacity>
                        <ScrollView onScroll={handleRepetitionScroll} scrollEventThrottle={16}>
                            {[...Array(60).keys()].map((repetition) => (
                                <View key={repetition} style={styles.numberContainer}>
                                    <Text
                                        style={
                                            repetition === selectedRepetition ? styles.selectedNumberText : styles.numberText
                                        }
                                    >
                                        {repetition < 10 ? `0${repetition}` : repetition}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                        <TouchableOpacity style={styles.arrowContainer}>
                            <Text style={styles.arrowText}></Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <View style={styles.daysContainer}>
                <View style={[{ marginTop: 0 }]} >
                    <Pressable
                        style={styles.buttonDays}
                        onPress={() => navigate('/repeat')}>
                        <Text style={[styles.text, { color: '#60D4FE' }]}>
                            Repetir
                        </Text>
                        <Image source={require('../../assets/lessthan.png')} />
                    </Pressable>

                    <Pressable
                        style={styles.button}
                        onPress={() => navigate('/home')}>
                        <Text style={[styles.text, { color: '#60D4FE' }]}>Guardar Alarma</Text>
                    </Pressable>

                </View>
            </View>

        </View>
    );
}

export default NumberScroll;