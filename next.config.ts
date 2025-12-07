import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    disableStaticImages: true, // importした画像の型定義設定を無効にする
  },
  webpack: (config) => {
   config.module.rules.push({
     test: /\.svg$/,
     use: [
       {
         loader: "@svgr/webpack",
       },
     ],
   });
   return config;
 },
};

export default nextConfig;
