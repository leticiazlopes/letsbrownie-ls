export default function Forms () {
    return (
        <div class="bg-white p-8 rounded-lg shadow-lg w-3/4 m-auto mt-8 mb-16">
            <h2 class="text-2xl text-center mb-6">Garanta a sua vaga!</h2>
            <form>
                <div class="mb-4">
                    <label for="nome" class="block text-gray-700 font-semibold mb-2">Nome *</label>
                    <input type="text" id="nome" name="nome" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input type="email" id="email" name="email" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div class="mb-4">
                    <label for="telefone" class="block text-gray-700 font-semibold mb-2">Telefone *</label>+
                    <input type="text" id="telefone" name="telefone" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div class="mb-4">
                    <label for="cupom" class="block text-gray-700 font-semibold mb-2">Cupom de Desconto</label>
                    <input type="text" id="cupom" name="cupom" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <p class="font-semibold text-blue-500 mb-4">Valor do curso: <span id="preco-original">R$147,00</span></p>
                <p id="desconto-aplicado"></p>
            
                <button type="button" id="btn-desconto" class="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Aplicar cupom
                </button>

                <button type="submit" class="w-full bg-green-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Finalizar compra
                </button>
            </form>
        </div>
    )
}