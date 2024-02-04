/** マス目一つ一つ */
export function Square({ value }: { value: string }) {
    function handleClick() {
        console.log('hello world!');
    }
    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}