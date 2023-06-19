import { combineReducers } from 'redux';

import home from '@modules/home/store/reducer.home';
import login from '@modules/login/store/reducer.login';
import tokenInfo from '@modules/otp/store/reducer.verify';

const rootReducer = combineReducers({ home, login, tokenInfo });

export default rootReducer;
