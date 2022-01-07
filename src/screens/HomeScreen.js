import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import {connect} from 'react-redux';
import FirstSetup from '../components/firstSetup';
import {DELETETASK} from '../reducers/actions';

const HomeScreen = props => {
  useEffect(() =>
    props.navigation.addListener('focus', () => {
      setRefresh(!refresh);
    }),
  );
  console.log(props.task);
  const [refresh, setRefresh] = useState(false);

  const taskitems = props.task;

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: 'grey',
        }}
      />
    );
  };

  const deleteItem = id => {
    // console.log(index._dispatchInstances.index)
    console.log(id);
    Alert.alert('Do you want to delete this Task?', '', [
      {
        text: 'Yes',
        onPress: () => {
          // props.task.splice(index, 1);
          props.dispatch(DELETETASK(id));
          setRefresh(!refresh);
        },
        style: 'cancel',
      },
      {text: 'No', onPress: () => console.log('Cancelled')},
    ]);
  };

  const renderItem = ({item}) => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          padding: 20,
          margin: 10,
          flex: 1,
          backgroundColor: '#1A1A1A',
          borderRadius: 20,
        }}>
        <View style={styles.topView}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Image
              source={require('../assets/images/bin.png')}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topView2}>
          <Text style={styles.decription}>{item.description}</Text>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Edit', {id: item.id})}>
            <Image
              source={require('../assets/images/edit.png')}
              style={styles.buttonImageIconStyle2}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.updatedDate}>
          <Text style={styles.createdDate}>{item.createdDate}</Text>

          <Text style={{color: '#949494'}}>{item.updatedDate}</Text>
        </View>
        <Text style={styles.isDeleted}>{item.isDeleted}</Text>
      </View>
    );
  };

  const myKeyExtractor = item => {
    return item.id;
  };

  if (taskitems.length === 0) {
    return <FirstSetup nvg={props.navigation} />;
  } else {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <FlatList
            data={taskitems}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={renderItem}
            keyExtractor={myKeyExtractor}
            extraData={refresh}
          />
          <View style={styles.look2}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Task')}
              style={styles.allbutton2}>
              <Text style={styles.create2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {task: state.data};
};

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  look2: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  body: {
    flex: 1,
    backgroundColor: '#000000',
  },
  allbutton2: {
    height: 65,
    width: 65,
    margin: 20,
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'skyblue',
  },
  create2: {
    fontSize: 55,
    color: 'white',
  },
  updatedDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    marginTop: 20,
    color: 'white',
  },
  createdDate: {
    color: '#949494',
  },
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  decription: {
    fontSize: 14,
    margin: 5,
    color: '#F0F0F0',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonImageIconStyle2: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    justifyContent: 'flex-end',
  },
  topView: {
    margin: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topView2: {
    margin: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
