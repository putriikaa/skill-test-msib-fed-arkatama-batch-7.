"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get(
    "https://pmb.alkautsar.ponpes.id/api/cms/blog"
  );
  return response.data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
    status: "idle",
    error: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message?.toString();
      });
  },
});

export default blogSlice.reducer;
