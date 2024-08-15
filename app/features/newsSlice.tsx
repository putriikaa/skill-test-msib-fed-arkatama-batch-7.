"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(
    "https://pmb.alkautsar.ponpes.id/api/cms/news"
  );
  return response.data;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    status: "idle",
    error: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message?.toString();
      });
  },
});

export default newsSlice.reducer;
