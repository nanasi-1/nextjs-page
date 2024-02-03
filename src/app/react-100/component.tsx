// コンポーネントは別ファイルにしてみる
// このほうがスッキリするかな？

import styles from "./styles/page.module.css";

/** 
 * リンクがあるリストのアイテム。  
 * 要するにこれ。
 * ```
 * <li><a href={url}>{title}</a></li>
 * ```
 * ループとかで使うイメージ。
 */
export function ListItemWithLink({url, title}: {url: string, title: string}) {
    return (
        <li>
            <a href={url} target="_blank" className={styles.a}>{title}</a>
        </li>
    );
}