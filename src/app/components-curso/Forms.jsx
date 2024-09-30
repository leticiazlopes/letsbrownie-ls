"use client";
import React, { useState } from "react";
import { supabase } from '../../supabase.js';

export default function Forms() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cupom, setCupom] = useState('');
  const [message, setMessage] = useState('');

  const validateForm = (e) => {
    e.preventDefault(); // impede o envio do formulário

    // Regex para validar o email e telefone
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i;
    const telefoneRegex = /^[0-9]{10,11}$/;

    if (!emailRegex.test(email)) {
      setMessage("Email inválido.");
    } else if (!telefoneRegex.test(telefone)) {
      setMessage("Telefone inválido.");
    } else {
      setMessage("Formulário enviado com sucesso!");
      handleSubmit(); // Chama a função para enviar os dados ao Supabase
    }
  };

  const handleSubmit = async () => {
    // Enviando os dados para o Supabase
    const { data, error } = await supabase
      .from('info_supabase') 
      .insert([{ nome, email, telefone, cupom: cupom || null }]);

    if (error) {
      console.error('Erro ao inserir dados:', error);
      setMessage('Erro ao enviar dados.');
    } else {
      console.log('Dados inseridos com sucesso:', data);
      setMessage('Dados enviados com sucesso!');
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
      <form onSubmit={validateForm}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">Nome *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">Telefone *</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cupom" className="block text-gray-700 font-semibold mb-2">Cupom de Desconto</label>
          <input
            type="text"
            id="cupom"
            name="cupom"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={cupom}
            onChange={(e) => setCupom(e.target.value)}
          />
        </div>

        <p className="font-semibold text-blue-500 mb-4">Valor do curso: <span id="preco-original">R$147,00</span></p>
        <p className="text-red-500">{message}</p>
        <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Finalizar compra
        </button>
      </form>
    </div>
  );
}
