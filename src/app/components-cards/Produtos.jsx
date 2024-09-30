import React from 'react';
import Card from './Card';

const produtos = [
    {
        img: 'bolo_brownie.jpg',
        nome: 'Bolo Brownie',
        serve: '10 pessoas',
        peso: '1.2kg',
        preco: 'R$ 70'
    },
    {
        img: 'brownie_nozes.jpg',
        nome: 'Brownie com nozes',
        serve: '1 pessoa',
        peso: '80g',
        preco: 'R$ 8',
        
    },
    { 
        img: 'brownies_tradicional.jpg',
        nome: 'Brownie tradicional',
        serve: '1 pessoa',
        peso: '70g',
        preco: 'R$ 6',

    },
    {
        img: 'caixa_brownies.jpeg',
        nome: 'Caixa de brownies',
        serve: '2 pessoas',
        peso: '300g',
        preco: 'R$ 30',

    }
];

function Produtos() {
    console.log(produtos);
    return (
        <div  className="produtos-container"> 
            {produtos.map((produto, index) => (
                <Card key={index} {...produto} />
            ))}
        </div>
    );
}

export default Produtos;