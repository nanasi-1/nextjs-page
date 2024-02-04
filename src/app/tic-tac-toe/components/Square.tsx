/** マス目一つ一つ */
export function Square({ value, onSquareClick }: { 
    value: SquareValue,
    onSquareClick: () => void
}) {
    return (
        <button 
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}