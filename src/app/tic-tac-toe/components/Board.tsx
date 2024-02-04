'use client';

import { useState } from "react";
import { Square } from "./Square";

export default function Board() {
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    function onSquareClick(i: number) {
        const nextSquares = squares.slice(); // 配列をコピー
        nextSquares[i] = "×";
        setSquares(nextSquares);
    }
    return (
        <div className="board">
            {
                // 0~9が入ったの配列からSquare9個を生成
                Array(9).fill(null).map((_,i) => { return ( 
                    <Square value={squares[i]} onSquareClick={() => onSquareClick(i)} key={i}/>
                )})
            }
        </div>
    );
}