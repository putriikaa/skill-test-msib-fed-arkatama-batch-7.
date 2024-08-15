"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortofolio = createAsyncThunk(
  "portofolio/fetchPortofolio",
  async () => {
    const response = await axios.get(
      "https://pmb.alkautsar.ponpes.id/api/cms/portofolio"
    );
    return response.data;
  }
);

const portofolioSlice = createSlice({
  name: "portofolio",
  initialState: {
    data: [],
    status: "idle",
    error: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortofolio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPortofolio.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchPortofolio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message?.toString();
      });
  },
});

export default portofolioSlice.reducer;
