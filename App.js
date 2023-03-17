import React from 'react';
import { StyleSheet } from 'react-native';
import BottomBar from "./src/components/BottomBar/BottomBar";


const App = () => {
  return (
        <BottomBar/>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-end'
  },
});

export default App;
