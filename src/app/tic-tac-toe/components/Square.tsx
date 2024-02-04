/** マス目一つ一つ */
export function Square({ value }: { value: SquareValue}) {
    return (
        <button className="square">
            {value}
        </button>
    );
}