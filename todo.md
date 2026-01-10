# TODO

## ビルド/デプロイ

- GitHub Actions 等で `npm ci` → `npm run lint` → `npx tsc --noEmit` → `npm run build` のCIを回す

## UI/コンテンツ

- Hero のSNS/メールリンクに `aria-label` もしくは `sr-only` を追加する
- アンカー遷移で見出しが隠れる対策（`SectionShell` に `scroll-mt-*` を付与）
- Projects の並び替え・タグ付け（`type` を固定値にしてフィルタできるようにする）
- About/Career の文言を短くして読みやすくする（1カード/1文の粒度に整理）
- 画像（`imgSrc`）の最適化（事前圧縮、WebP/AVIF 化の検討）

## 検証

- 実機（モバイル）でナビゲーション遷移とカルーセル操作性の確認
- `npm run lint` の警告有無を確認
