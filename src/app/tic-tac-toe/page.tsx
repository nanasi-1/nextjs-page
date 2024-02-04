import './styles.css';
import Game from "./components/Game";
import { Metadata } from 'next';

// タイトルの編集
export const metadata: Metadata = {
    title: '三目並べ'
};

export default function TicTacToe() {
    return (
        <main>
            <h1>三目並べ</h1>
            <p>
                <a href="https://ja.react.dev/learn/tutorial-tic-tac-toe">Reactチュートリアル</a>
                のやつを作りたいと思ってる<br />
                今のところ思ってるだけ<br />
            </p>
            <hr />
            <Game />
        </main>
    );
}