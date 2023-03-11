import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
const items = [
  {
    id: 1,
    name: 'imran',
    title:'Rama'
  },
  {
    id: 2,
    name: 'shad',
    title:'Shyma'
  },
  {
    id: 3,
    name: 'imran',
    title:'BUBU'
  },
  {
    id: 4,
    name: 'shad',
    title:'Gelhi'
  },
];
const AccordionValue = () => {
    const [visibleIndex, setVisibleIndex] = useState(-1);
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.column}>
              <Text>{item.name}</Text>
              {visibleIndex === index ? (
                <View style={styles.floatComponent}>
                  <Text style={styles.btn} onPress={() => console.log(index)}>
                   {item?.title}
                  </Text>
                </View>
              ) : (
                <Text
                  onPress={() => {
                    console.log(index);
                    setVisibleIndex(index);
                    console.log({ visibleIndex });
                  }}
                  style={[styles.floatComponent, { fontSize: 30 }]}>
                  ...
                </Text>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default AccordionValue

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 40,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    column: {
      width: '100%',
      height: 70,
      backgroundColor: 'red',
      margin: 5,
      justifyContent: 'center',
      padding: 10,
    },
    floatComponent: {
      position: 'absolute',
      top: 0,
      right: 8,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    btn: {
      backgroundColor: 'pink',
      margin: 1,
      padding: 5,
    },
  });