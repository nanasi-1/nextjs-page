This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 概要

[Reactアプリ100本ノック](https://qiita.com/Sicut_study/items/3c5cd798313854a471a0)がやりたくなった


## Getting Started

First, run the development server:

```bash
chmod 777 ./starting.sh
docker compose up -d --build
docker compose exec app bash
```

```bash
# in コンテナ
./starting.sh
```

上のコマンドを実行すると、まずtmuxが立ち上がります。  
そしてserver(0番)ウィンドウで`yarn dev`が実行され、サーバーが起動されるようになっています。  
ブラウザで[http://localhost:8000](http://localhost:8000) を見てみてください。

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
