import { StyleSheet,View, Text } from "react-native";
import React from "react";
import TouchableExample from "./components/TouchableExample";
import RecapTouchable from "./components/RecapTouchable";
import Example_UseEffect from "./components/Example_UseEffect";
import UseEffectFlatList from "./components/UseEffectFlatList";
import RandomUsersScreen from "./components/RandomUsersScreen";
import FlatList_Example1 from "./components/FlatList_Example1";
import FlatList_HeaderFooter from "./components/FlatList_HeaderFooter";
import FlatListAPI from "./components/FlatListAPI";
import News from "./components/News";

const App = () => {
  return (
    <View style = {styles.container}>

      <FlatList_HeaderFooter/>
      <News/>
    </View>
  );
};