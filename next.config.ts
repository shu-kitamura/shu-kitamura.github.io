import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    disableStaticImages: true, // importした画像の型定義設定を無効にする
  },
};

export default nextConfig;
