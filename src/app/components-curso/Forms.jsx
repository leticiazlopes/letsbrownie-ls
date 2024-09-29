"use client"
import React, { useState } from "react";

export default function Forms() {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState("");


  const validateForm = (e) => {
    e.preventDefault(); // impede o envio do formulário

    // Regex para validar o email
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i;
    const telefoneRegex = /^[0-9]{10,11}$/;
    

    if (!emailRegex.test(email)) {
      setMessage("Email inválido.");
    } else if (!telefoneRegex.test(telefone)) {
      setMessage("Telefone inválido.");
    } else {
      setMessage("Formulário enviado com sucesso!");
    };
  }
  
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">Telefone *</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cupom" className="block text-gray-700 font-semibold mb-2">Cupom de Desconto</label>
          <input 
          type="text" 
          id="cupom" 
          name="cupom" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <p className="font-semibold text-blue-500 mb-4">Valor do curso: <span id="preco-original">R$147,00</span></p>
        <p id="desconto-aplicado"></p>
        <button type="button" id="btn-desconto" className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                     Aplicar cupom
        </button>

        <p className="text-red-500">{message}</p>
        <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Finalizar compra
          
        </button>
        </form>
        </div>
)}



// import React from "react"

// export default function Forms () {
//     return (
//         <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 m-auto mt-8 mb-16">
//             <h2 className="text-2xl text-center mb-6">Garanta a sua vaga!</h2>
//             <form id="form">
//                 <div className="mb-4">
//                     <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">Nome *</label>
//                     <input type="text" id="nome" name="nome" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
//                     <input type="text" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">Telefone *</label>
//                     <input type="text" id="telefone" name="telefone" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                     <p id="output"></p>
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="cupom" className="block text-gray-700 font-semibold mb-2">Cupom de Desconto</label>
//                     <input type="text" id="cupom" name="cupom" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                 </div>
//                 <p className="font-semibold text-blue-500 mb-4">Valor do curso: <span id="preco-original">R$147,00</span></p>
//                 <p id="desconto-aplicado"></p>
            
//                 <button type="button" id="btn-desconto" className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     Aplicar cupom
//                 </button>

//                 <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     Finalizar compra
//                 </button>
//             </form>
//         </div>
//     )
// }

