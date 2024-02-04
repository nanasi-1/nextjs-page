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
function ListItemWithLink({url, title}: PageInfo) {
    return (
        <li>
            <a href={url} target="_blank" className={styles.a}>{title}</a>
        </li>
    );
}

export function PageList({pages}: {pages: PageInfo[]}) {
    return (
        <ol className={styles.ol}>
            {pages.map(({url, title}) => {return (
                <ListItemWithLink url={url} title={title} key={title}/>
            )})}
        </ol>
    );
}