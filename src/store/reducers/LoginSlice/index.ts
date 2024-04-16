import {createSlice} from '@reduxjs/toolkit';

type LoginState = {
  token: string;
  loading: boolean;
  status: string;
  userData: any;
};

let initialState: LoginState = {
  token: '',
  loading: false,
  status: '',
  userData: null,
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    storeToken(state, action) {
      state.token = action.payload ?? '';
    },
    showLoader(state, action) {
      state.loading = action.payload ?? false;
    },
    signOut(state) {
      state.token = '';
      state.userData = null;
    },
  },
});

export const {storeToken, showLoader, signOut} = LoginSlice.actions;
export default LoginSlice.reducer;
