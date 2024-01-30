import { Metadata } from "next";
import styles from "./page.module.css";
import pages from "./pageData.json";

// タイトルの編集
export const metadata: Metadata = {
    title: 'ページタイトル'
};

export default function React100() {
    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>Reactアプリ100本ノックを解いてみた</h1>
            <p>
                ...っていうのをやりたいと思っています。<br />
                今の所思っているだけです。<br />
            </p>
            <h2 className={styles.heading}>記事のリンクまとめ</h2>
            <ol className={styles.ol}>
                {pages.map(({url, title}) => {
                    return (
                        <li><a href={url}>{title}</a></li>
                    );
                })}
            </ol>
        </main>
    );
}