import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import TasksContainer from '../TasksContainer';

const { View, Text } = ReactNative;

class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <TasksContainer/>
        <Text>{JSON.stringify(this.props)}</Text>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}

export default App;
