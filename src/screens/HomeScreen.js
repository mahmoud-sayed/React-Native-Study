import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import HomeScreenComponent from "../components/HomeScreenComponent";

const HomeScreen = (props) => {
  console.log(props);
  const Name = 'Mahmoud Alsayed ElBoraye';
  return (
    <View>
      <Text style={styles.text}>Getting Started With ReactNative!</Text>
      <Text style={styles.nameStyle}>My Name is {Name}</Text>
      <Button title="take me to the next page" onPress={() => console.log('button pressed')} />
      <TouchableOpacity>
        <Text onPress={() => console.log('hello motherfucked ')}>Hello MotherFucked</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20
  }

});

export default HomeScreen;
