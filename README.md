<p align="center">
    <h1 align="center"><code>MyTasks</code></h1>
</p>
<p align="center">
    <em>Uma aplicação prática e funcional de lista de tarefas, criada para organizar checklists diárias e reforçar conhecimentos em DOM e eventos JavaScript.</em>
</p>
<p align="center">
    <em>Construído com as seguintes ferramentas e tecnologias:</em>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=flat-square&logo=CSS3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1C.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
</p>

<br>

<details><summary>Sumário</summary>

- [📍 Visão Geral](#-visão-geral)
- [🎯 Funcionalidades](#-funcionalidades)
- [📂 Estrutura do Repositório](#-estrutura-do-repositório)
- [⚙️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🚀 Como Usar](#-como-usar)
- [🧩 O que Aprendi](#-o-que-aprendi)
- [📌 Roteiro do Projeto](#-roteiro-do-projeto)

</details>
<hr>

## 📍 Visão Geral

MyTasks foi criado para resolver um problema real: a necessidade de gerenciar minhas checklists diárias de tarefas de forma simples e eficiente. Além de organizar meu dia, o projeto serviu para reforçar meus conhecimentos em manipulação do DOM e eventos em JavaScript.

---

## 🎯 Funcionalidades

- Adicionar tarefas com validação (evita espaços em branco ou campos vazios)  
- Editar tarefas existentes  
- Deletar tarefas  
- Marcar tarefas como concluídas clicando no texto (riscando o item)  
- Filtrar tarefas: todas, pendentes e concluídas  
- Interface simples e funcional, com foco em usabilidade

---

## 📂 Estrutura do Repositório

```sh
└── /
    ├── css
    │   └── style.css
    ├── js
    │   └── script.js
    ├── index.html
    └── README.md

```

## ⚙️ Tecnologias Utilizadas

- **HTML5** – Estrutura da aplicação  
- **CSS3** – Estilo e layout  
- **JavaScript** – Manipulação do DOM e lógica das tarefas  

---

## 🚀 Como Usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse a pasta do projeto:

cd seu-repositorio
Abra o arquivo index.html no navegador.

Adicione, edite, marque e filtre suas tarefas diárias.

```

## 🧩 O que Aprendi

- Validação eficiente de inputs usando `.trim()` para evitar espaços vazios  
- Manipulação dinâmica do DOM para criação, edição e remoção de elementos  
- Controle avançado de eventos, incluindo o uso do evento `blur` para detectar saída do campo de edição  
- Uso dos métodos `replaceWith` para substituir elementos do DOM de forma eficiente  
- Utilização do método `closest` para navegar na árvore DOM e facilitar a manipulação de elementos relacionados  
- Implementação de filtros para gerenciar a visualização das tarefas (todas, pendentes, completas)  

---

## 📌 Roteiro do Projeto

- [X] Criar funcionalidades básicas de adicionar, editar, deletar e marcar tarefas  
- [X] Implementar filtros de visualização (todas, pendentes, completas)  
- [ ] Estilizar checkbox customizado  
- [ ] Implementar modo dark para a aplicação  
- [ ] Tornar o layout totalmente responsivo  
- [ ] Salvar tarefas usando localStorage para persistência  
