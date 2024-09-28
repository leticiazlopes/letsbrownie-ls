import React from 'react';
import Produtos from './Produtos';
import './style.css';



function App() {
    return (
        <div>
            <title>Let's Brownie</title>
            <h1 className='text-3xl font-bold text-center mt-10'>Nossos produtos</h1>
            <div className='container mx-auto p-6'>
            <Produtos />
            </div>
        </div>
    );
}

export default App;
