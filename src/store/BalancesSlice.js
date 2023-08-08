import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import balancesServices from "@/services/balancesServices";

export const createBalance = createAsyncThunk(
  "balances/createBalance",
  async balance => {
    const response = await balancesServices.createBalance(balance);
    return response;
  }
);

export const getBalance = createAsyncThunk(
  "balances/getBalance",
  async userId => {
    const response = await balancesServices.getBalance(userId);
    return response;
  }
);

export const deleteBalance = createAsyncThunk(
  "balances/deleteBalance",
  async id => {
    const response = await balancesServices.deleteBalance(id);
    return response;
  }
);

const balancesSlice = createSlice({
  name: "balances",
  initialState: {
    balances: [],
    loading: false,
    errors: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createBalance.pending, state => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(createBalance.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(createBalance.rejected, (state, action) => {
      state.errors = action.error;
      state.loading = false;
    });

    builder.addCase(getBalance.pending, state => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(getBalance.fulfilled, (state, action) => {
      state.balances = action.payload;
      state.loading = false;
    });
    builder.addCase(getBalance.rejected, (state, action) => {
      state.errors = action.error;
      state.loading = false;
    });

    builder.addCase(deleteBalance.pending, state => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(deleteBalance.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(deleteBalance.rejected, (state, action) => {
      state.errors = action.error;
      state.loading = false;
    });
  },
});

export default balancesSlice;
