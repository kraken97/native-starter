import ReactNative from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectLoginReducer } from '../../state/loginReducer/reducer';
import { authUser } from '../../state/loginReducer/actions';
// import styles from './styles';
import { persistor } from '../../setup';
const { View, Text, Button } = ReactNative;

export class TasksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // this.props.dispatch('AUTH_USER');
    let {dispatch, loginReducer} = this.props;
    console.log(loginReducer);
    // dispatch('AUTH_USER');
    return (
      <View >
        <Button title='kek' onPress={() => { this.props.dispatch(authUser());}}/>
        <Text> {JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}

TasksContainer.propTypes = {
  loginReducer: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  createSelector(selectLoginReducer, (loginReducer) => ({ loginReducer })),
  mapDispatchToProps
)(TasksContainer);
