import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import AccordionValue from './components/AccordionValue';


const AccordionSecond = ({ }) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const Name = [
        {
            id: '1',
            name: 'Biswopaban Nayak',
            title: ' We have a strong foundation of software-related knowledge to work in a better way',
            bio: ' A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.',
        },
        {
            id: '2',
            name: 'Pratyush Kumar',
            title: 'We have a strong foundation of software-related knowledge to work in a better way',

            bio: 'A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.'
        },
        {
            id: '3',
            name: 'K.P Lipsa',
            title: ' We have a strong foundation of software-related knowledge to work in a better way',
            bio: 'A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.'
        },
        {
            id: '4',
            name: 'Ipsita Rout ',
            title: 'We have a strong foundation of software-related knowledge to work in a better way',
            bio: 'A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.'

        },
        {
            id: '5',
            name: 'Ashis Kumar ',
            title: 'We have a strong foundation of software-related knowledge to work in a better way',
            bio: 'A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.'

        },

    ]

    return (
        <View style={{
            backgroundColor: '#FFFF',
            flex: 1
        }} >
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    paddingVertical: 15
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    WelCome to Accordion Method
                </Text>
            </View>

            <FlatList
                data={Name}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            backgroundColor: 'blue',
                            marginHorizontal: 10,
                            borderRadius: 15,
                            padding: 15,
                            marginVertical: 20,

                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderBottomWidth: 3,
                                padding: 5,
                                borderColor: '#fff'
                            }}
                        >
                            <View>
                                <Text
                                    style={{ color: '#fff', fontSize: 20 }}
                                >
                                    {item?.name}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                setShow(!show),
                                    setShow1(!show1),
                                    setShow2(!show2),
                                    setShow3(!show3),
                                    setShow4(!show4)
                            }}>
                                {
                                    show ?
                                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5477/5477237.png' }}
                                            style={{ width: 40, height: 40, }}
                                        />
                                        :
                                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1864/1864593.png' }}
                                            style={{ width: 30, height: 30, }}
                                        />
                                }
                            </TouchableOpacity>
                        </View>

                    </View>
                )}

            />

        </View>
    );
};

export default AccordionSecond

const styles = StyleSheet.create({})