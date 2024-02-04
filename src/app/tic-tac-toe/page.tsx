import './styles.css';
import Board from "./components/Board";

export default function () {
    return (
        <main>
            <h1>三目並べ</h1>
            <p>
                <a href="https://ja.react.dev/learn/tutorial-tic-tac-toe">Reactチュートリアル</a>
                のやつを作りたいと思ってる<br />
                今のところ思ってるだけ<br />
            </p>
            <hr />
            <Board />
        </main>
    );
}