import React from "react";
import Image from "next/image";

function Card({ img, nome, serve, peso, preco }) {
    return (
        <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Image
            src={`/imgs/${img}`}
            alt={nome}
            width={300} 
            height={200} 
            />
            <h2> {nome}</h2>
            <p> Serve: {serve} </p>
            <p> Peso: {peso} </p>
            <p> Preço: {preco} </p>
        </div>
    );
}

export default Card;