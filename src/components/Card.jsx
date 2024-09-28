import React from "react";
import Image from "next/image";

function Card({ img, nome, serve, peso, preco }) {
    return (
        <div className="card">
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