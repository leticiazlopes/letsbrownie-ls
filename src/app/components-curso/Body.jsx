import Image from "next/image"
import './style.css'

export default function Body () {
    return (
        <div>
          <div class="bg-white p-8 mx-auto my-8 w-3/4 rounded-lg">
            <Image 
                src="/imgs/logo.png"
                width={200}
                height={100}
                className="border rounded-2xl mb-8"
            />
            <h2 className="text-2xl font-extrabold text-center mb-4 mt-4 text-gray-900">Curso Básico de Confeitaria</h2>
            <div class="mb-4 text-gray-900 font-medium">
            <div>Você já sonhou em criar doces irresistíveis que encantam tanto os olhos quanto o paladar? Com o nosso  
            <strong> Curso Básico de Confeitaria</strong>, você aprenderá técnicas essenciais para preparar bolos, tortas, 
            cupcakes e muito mais, tudo do conforto da sua casa! 
            </div>
            <h3 className="ext-xl font-semibold mb-3 text-gray-900">Vantagens do Curso</h3>
            <ul class="list-disc list-inside mb-4 text-gray-900 font-medium">
                <li>Aulas 100% online, acessíveis em qualquer dispositivo.</li>
                <li>Material didático completo e disponível para download.</li>
                <li>Certificado de conclusão reconhecido.</li>
                <li>Acesso vitalício ao conteúdo do curso.</li>
                <li>Suporte direto com os instrutores para tirar dúvidas.</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3 text-gray-900">Preço</h3>
            <p class="mb-4 text-gray-900 font-medium">
            Tudo isso por apenas <strong class="text-blue-700">R$ 147,00</strong>. Aproveite essa oportunidade para 
            transformar sua paixão por confeitaria em habilidades práticas que farão sucesso em qualquer ocasião!
            </p>
            <p class="text-gray-900 text-center">
            <em>Garanta já sua vaga e comece a confeitar como um profissional!</em>
            </p>

        
            </div>

            <forms></forms>
            </div>

            
    
            

        
        </div>
    )

}