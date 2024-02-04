import { Square } from "./Square";
import { calcWinner } from "../util";

export default function Board({xIsNext, onPlay, squares}: {
    xIsNext: boolean,
    onPlay: (squares: SquareValue[]) => void,
    squares: SquareValue[]
}) {
    function handleClick(i: number) {
        if(squares[i]) return; // マスが入力済みの場合
        if(calcWinner(squares)) return; // 結果が出ている場合

        const nextSquares = squares.slice(); // 配列をコピー
        nextSquares[i] = xIsNext ? '×' : '○';
        onPlay(nextSquares);
    }

    return (
        <div className="board"> {
            // 0~9が入ったの配列からSquare9個を生成
            Array(9).fill(null).map((_,i) => { 
                return ( 
                    <Square value={squares[i]} onSquareClick={() => handleClick(i)} key={i}/>
                );
            })
        } </div>
    );
}