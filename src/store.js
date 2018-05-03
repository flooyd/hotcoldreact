import {createStore} from 'redux';

import {hotColdReducer} from './reducers/hotColdReducer';

export default createStore(hotColdReducer);
