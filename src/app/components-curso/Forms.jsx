"use client";

import { supabase } from '../../supabase.js'; 
import { useState } from 'react';
export default function Forms () {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cupom, setCupom] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        
        // Enviando os dados para o Supabase
        const { data, error } = await supabase
            .from('info_supabase') 
            .insert([{ nome, email, telefone, cupom: cupom || null }]);

        if (error) {
            console.error('Erro ao inserir dados:', error);
        } else {
            console.log('Dados inseridos com sucesso:', data);
            // Limpa os campos após o envio
            setNome('');
            setEmail('');
            setTelefone('');
            setCupom('');
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 m-auto mt-8 mb-16">
            <h2 className="text-2xl text-center mb-6">Garanta a sua vaga!</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">Nome *</label>
                    <input type="text" id="nome" name="nome" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">Telefone *</label>+
                    <input type="text" id="telefone" name="telefone" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={telefone} 
                    onChange={(e) => setTelefone(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="cupom" className="block text-gray-700 font-semibold mb-2">Cupom de Desconto</label>
                    <input type="text" id="cupom" name="cupom" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     value={cupom} 
                     onChange={(e) => setCupom(e.target.value)}/>
                </div>
                <p className="font-semibold text-blue-500 mb-4">Valor do curso: <span id="preco-original">R$147,00</span></p>
                <p id="desconto-aplicado"></p>
            
                <button type="button" id="btn-desconto" className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Aplicar cupom
                </button>

                <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Finalizar compra
                </button>
            </form>
        </div>
    )
}