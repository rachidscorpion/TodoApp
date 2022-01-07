import {CREATE, DELETE, EDIT} from './actions';
import {obj} from '../components/createTask';
import moment from 'moment';

const initialState = {data: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      let data = {
        id: (obj.id += 1),
        title: action.inpttitle,
        description: action.inptdescription,
        createdDate: moment().startOf('now').fromNow(),
        updatedDate: moment().startOf('now').fromNow(),
        isDeleted: false,
      };
      state.data.push(data);
      return state;
    case DELETE:
      state.data.splice(action.index, 1);
      return state;
    case EDIT:
      state.data[action.id].title = action.inpttitle;
      state.data[action.id].description = action.inptdescription;
      return state;
    default:
      return state;
  }
};
