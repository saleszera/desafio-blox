


<div  align="center">	
	<h1>Gerenciador Unidades Curriculares</h1>
</div>


<p  align="center">

<a  href="#-sobre-o-projeto">Sobre</a> •

<a  href="#%EF%B8%8F-funcionalidades">Funcionalidades</a> •

<a  href="#-como-executar-o-projeto">Como executar</a> •

<a  href="#-tecnologias">Tecnologias</a> •

<a  href="#%EF%B8%8F-captura-de-tela">Captura de tela</a> •

</p>




## 💻 Sobre o projeto


Gerenciador Unidades Curriculares é o resultado do desfio proposto pela EdTech Blox. A aplicação consome uma API e lista as unidades curriculares.


---

## ⚙️ Funcionalidades

O usuário pode:
- [x] Alterar a forma como a listagem é exibida
- [x] Pesquisa por título ou ID
- [x] Filtrar por status
- [x] Avançar páginas
- [x] Ver detalhes de uma unidade curricular

**[Veja a aplicação rodando clicando aqui](https://gerenciador-unidades.herokuapp.com/)**

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar das seguintes ferramentas:

- **[Git](https://git-scm.com)**
- **[Yarn](https://yarnpkg.com/getting-started/install)**
- **[NodeJs](https://nodejs.org/en/)**
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🧭 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/saleszera/desafio-blox

# Acesse a pasta do projeto no seu terminal/cmd
$ cd desafio-blox

# Instale as dependências
$ yarn
```
#### Importante
Após a instalação das dependências, crie na raiz da aplicação o `.env`, neste arquivo cole o conteúdo do `.env.example`. As variáveis devem ser preenchidas da seguinte forma:
```plaintext
REACT_APP_API_URL=https://api-dev.plataformablox.com.br/api
REACT_APP_API_USERNAME=Usuário valido, exemplo: integratorTeste
REACT_APP_API_PASSWORD=Senha valido, exemplo: 12345
REACT_APP_API_INSTITUTION_ID=ID da instituição, exemplo: 22
```
Após o correto preenchimento do `.env` execute `yarn start` para executar a aplicação.

## 🛠 Tecnologias


As seguintes ferramentas foram utilizadas na construção do projeto:


- **[ReactJS](https://pt-br.reactjs.org/docs/getting-started.html) + [TypeScript](https://www.typescriptlang.org/)** - O typescript foi utilizado pensando em futuras manutenções. Com a tipagem fica fácil saber oque uma função recebe e retorna.
- **[React-modal](https://github.com/reactjs/react-modal)** - Para a criação de modais.
- **[React-icons](https://github.com/react-icons/react-icons)** - Os ícones utilizados fazem parte do pacote feather.
- **[React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)** - Os hooks utilizados foram:
  - useState;
  - useEffect;
  - useContext;
  - useCallback;
- **[axios](https://github.com/axios/axios)** - Para chamadas a API.
- **[styled-components](https://styled-components.com/docs/basics)**

> Veja o arquivo [package.json](https://github.com/saleszera/desafio-blox/blob/main/package.json)


#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**

- Linting: **[EsLint](https://eslint.org/docs/user-guide/getting-started)** + **[Prettier](https://prettier.io/)**

- Markdown: **[StackEdit](https://stackedit.io/)**

---
### 🎥️ Captura de tela
  <div align="center"  >
	  <img src="https://media.giphy.com/media/pMLNVLlkCPB7dZMR9D/giphy.gif"/>
  </div>  

---

Feito com ❤️ por Raniery Sales 👋🏽 [Entre em contato!](https://www.linkedin.com/in/raniery-sales/)

---
