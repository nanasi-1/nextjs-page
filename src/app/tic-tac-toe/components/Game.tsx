'use client';

import { useState } from "react";
import Board from "./Board";
import { calcWinner } from "../util";

export default function Game() {
    const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: SquareValue[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function moveTo(i: number) {
        setCurrentMove(i);
    }

    const moveButtons = history.map((squares, i) => {
        const description = `Go to ${i > 0 ? `#${i}` : 'game start' }`;
        return (
            <li key={i}>
                <button onClick={() => moveTo(i)}>{description}</button>
            </li>
        );
    });

    const winner = calcWinner(currentSquares);
    const status = winner 
        ? `${winner}の勝ち！` 
        : currentSquares.filter(v => v===null).length === 0
            ? `引き分け`
            :`${xIsNext ? '×' : '○'}のターン`;

    return (
        <div className="game">
            <div className="game-board">
                <div className="status">{status}</div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <ol className="game-info">{moveButtons}</ol>
        </div>
    );
}
