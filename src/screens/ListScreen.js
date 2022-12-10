import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', Age: '20' },
    { name: 'Friend 2', Age: '20' },
    { name: 'Friend 3', Age: '20' },
    { name: 'Friend 4', Age: '20' },
    { name: 'Friend 5', Age: '20' },
    { name: 'Friend 6', Age: '20' },
    { name: 'Friend 7', Age: '20' },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={key => key.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <View >
              <Text style={style.textStyle}>{item.name} - Age {item.Age}</Text>

            </View>
          );
        }}
      />

    </View >
  );
};

const style = StyleSheet.create({
  textStyle: {

  },

});

export default ListScreen;