import React from "react";
import Link from 'next/link'

const Button = ({label, href}) => {
    return (
        <Link href={href} passHref>
        <button
            className="botao"
        >
            {label}
        </button>
    </Link>
    )
}

export default Button;