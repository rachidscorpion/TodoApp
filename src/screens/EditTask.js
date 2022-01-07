import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {EDITTASK} from '../reducers/actions';

const EditTask = props => {
  let param = props.route.params.id;
  const [title, setTitle] = useState(props.task[param].title);
  const [description, setDescription] = useState(props.task[param].description);

  const edittask = (title, description) => {
    let data = {title, description, param};
    props.dispatch(EDITTASK(data));
    props.navigation.navigate('Home');
  };

  const openAlert = () => {
    Alert.alert('Task title cannot be empty');
  };

  return (
    <View style={styles.body}>
      <TextInput
        style={styles.inputtitle}
        placeholder="Title"
        placeholderTextColor="#ADACAC"
        defaultValue={title}
        autoCorrect={false}
        onChangeText={i => setTitle(i)}
      />

      <View style={styles.inputdescription}>
        <TextInput
          // eslint-disable-next-line react-native/no-inline-styles
          style={{color: 'white'}}
          placeholder="description(optional)"
          placeholderTextColor="#ADACAC"
          defaultValue={description}
          autoCorrect={false}
          multiline={true}
          onChangeText={i => setDescription(i)}
        />
      </View>

      <View style={styles.look}>
        <TouchableOpacity
          onPress={() => {
            if (title === '' || title.length === 0) {
              openAlert();
            } else {
              edittask(title, description);
            }
          }}
          style={styles.allbutton}>
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
{
  /* <View style={{borderWidth:2, borderColor:'#34495E', marginLeft:10, marginRight:10, marginTop:3}}></View> */
}

const mapStateToProps = (state, props) => {
  return {task: state.data};
};

export default connect(mapStateToProps)(EditTask);

const styles = StyleSheet.create({
  modalview: {},
  look: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  inputtitle: {
    backgroundColor: '#1A1A1A',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    color: 'white',
  },
  inputdescription: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    margin: 20,
    marginTop: 10,
    padding: 20,
    height: 200,
    borderRadius: 20,
  },
  allbutton: {
    height: 50,
    width: 120,
    margin: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'skyblue',
  },

  body: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
