# 🍫 Let's Brownie


Esse projeto visa construir uma <strong>página de links para uma doceria,</strong> centralizando suas informações e maiores demandas para facilitar o acesso para seu público. Esse foi desenvolvido na matéria de <strong>Linguagem de Script</strong>, ministrada pelo professor Luiz Carlos e Francisco Dantas do curso de Sistemas para Internet do IFPB.


## 👀 Interfaces
### 🏠 Página Home
<div>
<img src="preview.png">
<br>

<p>Contém os elementos e seções principais da aplicação, sendo esses os seguintes <strong>botões<strong>:

-  `Nossos Produtos`: direciona à página de catálogo de produtos;
-  `Curso de confeitaria básica`: direciona à página de inscrição para um curso da marca. <p>
<div>
<hr>

### 🍰 Página Nossos Produtos
<div>
<img src="public/imgs/nossosprodutos.png">
<br>

<p>Contém os produtos disponíveis no catálogo e suas respectivas <strong>informações</strong>, segundo exemplo:

-  `Imagem de produto`: bolo_brownie.jpg
-  `Nome do produto`: Bolo Brownie
-  `Serve`: 10 pessoas
-  `Peso`: 1.2 kg
-  `Preço`: R$ 70 <p>
<div>
    <hr>


### 📒 Página Curso de confeitaria básica
<div>
<img src="public/imgs/curso.png">
<img src="public/imgs/forms.png">

<br>

<p>Contém as informações do curso disponibilizado e um <strong>formulário</strong> com os seguintes campos:

-  `Nome`
-  `Email`
-  `Telefone`
<div>
    <br>

## 🚀 Instalação e execução
1. Clone e abra o projeto na sua IDLE:
    ```
    git clone https://github.com/leticiazlopes/letsbrownie-ls.git
    ```
    ```bash
    code . 
    ```
2. Instale as dependências:
    ```
    npm install
    ```
3. Rode o projeto:
    ```
    npm run dev
    ```
<br>

## 📂 Estrutura de pastas
```
src/
├── app/
│   ├── components-cards/
│   │   ├── App.jsx            
│   │   ├── Card.jsx          
│   │   ├── Produtos.jsx      
│   │   ├── style.css        
│   ├── components-curso/
│   │   ├── Body.jsx           
│   │   ├── Forms.jsx          
│   │   ├── Header.jsx         
│   │   ├── style.css          
│   ├── components-home/
│   │   ├── Body.jsx           
│   │   ├── Button.jsx         
│   │   ├── Header.jsx         
│   │   ├── style.css          
├── curso/
│   ├── page.js                
│   ├── produtos/
│   │   ├── page.js            
├── style/
│   ├── globals.css           
│   ├── index.css              
│   ├── layout.js             
├── supabase.js                
```


## 💻 Tecnologias utilizadas
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/leticiazlopes/letsbrownie-ls)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Next](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

<br>


## 👥 Contribuidores
<table>
  <tr>
   <td align="center">
      <a href="https://github.com/leticiazlopes" title="gitHub">
        <img src="https://avatars.githubusercontent.com/u/129249488?v=4" width="100px;" alt="Foto de Letícia Lopes"/><br>
        <sub>
          <b>Letícia Lopes</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lailaaquino" title="gitHub">
        <img src="https://avatars.githubusercontent.com/u/140646861?v=4" width="100px;" alt="Foto de Laila"/><br>
        <sub>
          <b>Laila Aquino</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/suetonecarneiro" title="gitHub">
        <img src="https://avatars.githubusercontent.com/u/148480989?v=4" width="100px;" alt="Foto de Suetone"/><br>
        <sub>
          <b>Suetone Carneiro</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
