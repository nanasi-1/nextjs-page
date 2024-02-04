'use client';

import { useState } from "react";
import Board from "./Board";
import { calcWinner } from "../util";

export default function Game() {
    const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares: SquareValue[]) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    const moveButtons = history.map((squares, i) => {
        const description = `Go to ${i > 0 ? `#${i}` : 'game start' }`;
        return (
            <li key={i}>
                <button>{description}</button>
            </li>
        );
    });

    const winner = calcWinner(currentSquares);
    const status = winner ? `winner: ${winner}` : `Next: ${xIsNext ? '×' : '○'}`;

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
