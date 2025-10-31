import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    phoneNumber: '',
    otp: '',
    otpSent: false,
    user: null,
    loading: false,
    error: null,
    platformLanguage: 'english' // Added language state for persistence
  },
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      state.error = null;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
      state.error = null;
    },
    sendOtpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendOtpSuccess: (state) => {
      state.otpSent = true;
      state.loading = false;
    },
    sendOtpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    verifyOtpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    verifyOtpSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
    },
    verifyOtpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPlatformLanguage: (state, action) => {
      state.platformLanguage = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.otpSent = false;
      state.otp = '';
      state.phoneNumber = '';
      state.loading = false;
      state.error = null;
      // Note: platformLanguage is preserved on logout
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const {
  setPhoneNumber,
  setOtp,
  sendOtpStart,
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpStart,
  verifyOtpSuccess,
  verifyOtpFailure,
  setPlatformLanguage, // Export the language action
  logout,
  clearError
} = authSlice.actions;

export default authSlice.reducer;