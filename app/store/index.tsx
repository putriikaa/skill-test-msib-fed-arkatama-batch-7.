"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import blogReducer from "../features/blogSlice";
import portofolioReducer from "../features/portofolioSlice";
import newsReducer from "../features/newsSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    portofolio: portofolioReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch;
