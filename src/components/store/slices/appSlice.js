import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentScreen: 'home',
    bills: [],
    questions: [],
    sessions: [],
    feedback: [],
    chatMessages: [],
    dashboardData: {
      attendance: 0,
      billsData: [],
      constituencyIssues: 0
    },
    loading: false,
    error: null
  },
  reducers: {
    setCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
    addChatMessage: (state, action) => {
      state.chatMessages.push({
        id: Date.now(),
        ...action.payload,
        timestamp: new Date().toISOString()
      });
    },
    clearChatMessages: (state) => {
      state.chatMessages = [];
    },
    setBills: (state, action) => {
      state.bills = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setSessions: (state, action) => {
      state.sessions = action.payload;
    },
    setDashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const {
  setCurrentScreen,
  addChatMessage,
  clearChatMessages,
  setBills,
  setQuestions,
  setSessions,
  setDashboardData,
  setLoading,
  setError,
  clearError
} = appSlice.actions;

export default appSlice.reducer;