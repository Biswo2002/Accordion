import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';


const AccordionSecond = ({ }) => {

    const [biswopaban, setBiswopaban] = useState(false);
    const [show, setShow] = useState(false);
    const [pratyush, setPratyush] = useState(false);
    const [ashis, setAshis] = useState(false);
    const [lipsa, setLipsa] = useState(false);
    const [ipsita, setIpsita] = useState(false);

    const Name = [
        {
            id: '1',
            name: 'Biswopaban Nayak',
            title: ' We have a strong foundation of software-related knowledge to work in a better way',
            bio: ' A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.',
            onPress: () => setBiswopaban(!biswopaban),
        },
        {
            id: '2',
            name: 'Pratyush Kumar',
            title: ' We have a strong foundation of software-related knowledge to work in a better way',
            bio: ' A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.',
            onPress: () => setPratyush(!pratyush),
        },
        {
            id: '3',
            name: 'K.P Lipsa',
            title: ' We have a strong foundation of software-related knowledge to work in a better way',
            bio: ' A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.',
            onPress: () => setLipsa(!lipsa),
        },
        {
            id: '4',
            name: 'Ipsita Rout ',
            title: ' We have a strong foundation of software-related knowledge to work in a better way',
            bio: ' A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.',
            onPress: () => setIpsita(!ipsita),
        },
        {
            id: '5',
            name: 'Ashis Kumar ',
            title: ' We have a strong foundation of software-related knowledge to work in a better way',
            bio: ' A software engineer is a skilled person who can apply the theories and rules of software engineering to the design, development, restoration, maintenance, testing, and evaluation of various computer software.',
            onPress: () => setAshis(!ashis),
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
                renderItem={({ item }) => (
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
                            <TouchableOpacity onPress={item?.onPress}>
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
                        {biswopaban
                            &&
                            <View
                                style={{
                                    marginTop: 15,
                                    backgroundColor: '#fff',
                                    padding: 10,
                                    borderRadius: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#000',
                                        textAlign: 'center',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        paddingVertical: 10
                                    }}
                                >
                                    {item?.title}
                                </Text>
                                <Text
                                    style={{
                                        color: '#000',
                                        textAlign: 'justify',
                                        fontSize: 15
                                    }}
                                >
                                    {item?.bio}
                                </Text>

                            </View>
                        }
                    </View>
                )}
            />
        </View>
    );
};

export default AccordionSecond

const styles = StyleSheet.create({})