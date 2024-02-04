import { useState } from "react";

/** マス目一つ一つ */
export function Square() {
    const [value, setValue] = useState<'×' | '○' | null>(null);

    function handleClick() {
        setValue('×');
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