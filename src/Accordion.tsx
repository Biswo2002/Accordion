import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Accordion = ({ title, content }: any) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <View>
                <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                    <Text>{title}</Text>
                </TouchableOpacity>
                {expanded && <Text>{content}</Text>}
            </View>
            <View>
                <Accordion
                    title="Accordion Title"
                    content="This is the content of the accordion"
                />
            </View>
        </>
    );
};

export default Accordion

const styles = StyleSheet.create({})