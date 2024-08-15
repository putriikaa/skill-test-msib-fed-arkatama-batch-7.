"use client";

import logo from "../assets/logo.png";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchBlogs } from "./features/blogSlice";
import { fetchPortofolio } from "./features/portofolioSlice";
import { fetchNews } from "./features/newsSlice";
import { RootState, useAppDispatch } from "./store";
import Image from "next/image";

const LandingPage = () => {
  const dispatch = useAppDispatch();

  const blogState = useSelector((state: RootState) => state.blog);
  const portofolioState = useSelector((state: RootState) => state.portofolio);
  const newsState = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchPortofolio());
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="p-10">
      <header className="flex flex-row justify-center gap-10">
        <Image src={logo} alt="" />
        <div className="flex flex-row gap-5 items-center">
          <p>About</p>
          <p>Produk</p>
          <p>Pendaftaran</p>
          <p>Donasi</p>
          <p>Kontak</p>
          <p>Masuk</p>
          <button className="color-red">Daftar Sekarang</button>
        </div>
      </header>

      <section>
        <h2>Blogs</h2>
        {blogState?.status === "loading" && <p>Loading...</p>}
        {blogState?.status === "succeeded" &&
          blogState?.data?.map((blog: any) => (
            <div key={blog?.id ?? ""}>{blog?.judul ?? "-"}</div>
          ))}
      </section>

      <section>
        <h2>Portfolios</h2>
        {portofolioState?.status === "loading" && <p>Loading...</p>}
        {portofolioState?.status === "succeeded" &&
          portofolioState?.data?.map((portofolio: any) => (
            <div key={portofolio?.id ?? ""}>{portofolio?.judul ?? ""}</div>
          ))}
      </section>

      <section>
        <h2>News</h2>
        {newsState?.status === "loading" && <p>Loading...</p>}
        {newsState?.status === "succeeded" &&
          newsState?.data?.map((news: any) => (
            <div key={news?.id ?? ""}>{news?.judul ?? ""}</div>
          ))}
      </section>
    </div>
  );
};

export default LandingPage;
