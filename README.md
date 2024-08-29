<center>
<h1>Aplicativo de clima React + Tailwind </h1>
</center>

<center>
<img src="./src/assets/favicon.webp" alt="Logo do clima">
</center>

<center>
 Redes Sociais
</center>

<center>
 <a href="">Linkedin</a> -
 <a href="">Github</a>
</center>

<br>

Um aplicativo simples de clima construído em React + Tailwind CSS, que permite aos usuários buscar informações climáticas em tempo real utilizando uma API externa [Weatherapi](https://www.weatherapi.com/).

O design é responsivo e minimalista, nele implemento diversas práticas modernas de desenvolvimento como hooks, funções assíncronas e eslint.

<center>
<img src="./src/assets/demo.gif" alt="Demo Gif">
</center>

### **Funcionalidades**

- Buscar o clima atual por cidade
- A entrada do input pode ser em LowerCase ou UpperCase
- Uso de componentes controlados (controlled components)
- Design responsivo e agradável com Tailwind CSS
- Manipulação de erros para valores indefinidos
- Exibir informações climáticas como temperatura, descrição do clima e um ícone correspondente
- Exibe a cidade, país e estado

### **Tecnologias Utilizadas**

- **React:** Biblioteca para construção da interface.
- **Tailwind CSS:** Framework para estilização rápida e responsiva.
- **API Externa:** Integração com a API weaterapi (LINK DA API) para obter dados em tempo real.
- **Hooks:** Uso do `useState` e `useEffect` para gerenciar estado e efeitos colaterais.
- **Helpers:** Prevenção de erros quando o aplicativo carrega e porém não tem os dados completos ainda.
- **Eslint:** Ferramenta para garantir qualidade e padronização do código.
- **Funções Assíncronas:** Uso de fetch para as requisições à API.
- **Prop-Types:** Permite verificar o tipo dos componentes props antes da aplicação ser executada

### **Instalação**

Você pode fazer um clone do repositório e rodar na sua maquina.

```bash
//para clonar o repositório
git clone https://github.com/paulopbi/weather_app.git

//para entrar na pasta
cd weatherapp

//para instalar as dependencias
npm install

//para executar o servidor
npm run dev
```