'use client';

import { useState } from "react";
import { Square } from "./Square";

export default function Board() {
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i: number) {
        if(squares[i]) return; // マスが入力済みの場合
        if(calcWinner(squares)) return; // 結果が出ている場合

        const nextSquares = squares.slice(); // 配列をコピー
        nextSquares[i] = xIsNext ? '×' : '○';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calcWinner(squares);
    const status = winner ? `winner: ${winner}` : `Next: ${xIsNext ? '×' : '○'}`;

    return (
        <>
            <div className="status">{status}</div>
            <div className="board"> {
                // 0~9が入ったの配列からSquare9個を生成
                Array(9).fill(null).map((_,i) => { 
                    return ( 
                        <Square value={squares[i]} onSquareClick={() => handleClick(i)} key={i}/>
                    );
                })
            } </div>
        </>
    );
}

/** 勝者を判定する関数 */
function calcWinner(squares: SquareValue[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}