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
      <header className="flex flex-row justify-center gap-10 mb-20">
        <Image src={logo} alt="" />
        <div className="flex flex-row gap-5 items-center">
          <p>About</p>
          <p>Produk</p>
          <p>Pendaftaran</p>
          <p>Donasi</p>
          <p>Kontak</p>
          <p>Masuk</p>
          <button
            className="bg-[#002EC1] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700"
            onClick={() => {}}
          >
            Daftar Sekarang
          </button>
        </div>
      </header>

      <div className="flex flex-row">
        <div className="flex flex-col gap-[8px] w-auto">
          <p className="text-[#002EC1]">
            Mau Jadi Generasi Mahir Teknologi, Kuat Iman?
          </p>
          <p className="text-[#000] font-bold mb-[-20px] text-[48px] block">
            Pondok Pesantren
          </p>
          <p className="text-[#002EC1] font-bold text-[48px]">
            {"{Technopreneur}"}
          </p>
          <p>
            Mencetak generasi unggul yang mahir di bidang teknologi digital dan
            teguh dalam pemahaman Islam Ahlu Sunnah Wal Jama’ah
          </p>
          <div className="border-[#002EC1] border-2 py-2 px-4 rounded-full flex flex-row items-center gap-4">
            <p>Jago IT Rajin Ngaji bersama Al Kautsar</p>
            <button
              className="bg-[#002EC1] text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700"
              onClick={() => {}}
            >
              Download Profile Kami
            </button>
          </div>
        </div>
      </div>
      {/* 
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
      </section> */}
    </div>
  );
};

export default LandingPage;
