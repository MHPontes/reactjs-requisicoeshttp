import React, { useEffect, useState } from 'react';
import './style.css';


////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';   
      fetch(url)   //fazendo a requisição da url fetch é uma função do js
        .then((r) => r.json())  //convertendo a resposta em json
        .then((json) => {     //pegando o json
          console.log(json)
          setNutri(json);    //setando o json no useState nutri
        })
    }
    loadApi();
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {         //mapeando o json de acordo com os items
        return ( 
          <article key={item.id} className="post">    

            <strong className="titulo">{item.titulo}</strong>    

            <img src={item.capa} alt={item.titulo} className="capa" />

            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
