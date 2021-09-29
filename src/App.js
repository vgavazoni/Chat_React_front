import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

let socket;

function App() {

  const ENDPOINT = "http://localhost:8080/";  // Aqui faz a ligação com o backend

  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState("");
  const [sala, setSala] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [listaMensagem, setlistaMensagem] = useState([]);

  useEffect(() => {
    socket = socketIOClient(ENDPOINT)
  },[]);  // Executa isso somente uma vez

  useEffect(() => {
    socket.on("receber_mensagem", (dados) =>{
      setlistaMensagem([...listaMensagem, dados]);
    });   // ON paara receber os dados
  });

  const conectarSala = () => {
      console.log("Acessou a sala " + sala + " com o usuario " + nome)
      setLogado(true);
      socket.emit("sala_conectar", sala);  // Enviar a sala ao back-end
   }

   const enviarMensagem = async () => {
     console.log("Mensagem: " + mensagem);
     const conteudoMensagem = {
       sala,
       conteudo: {
         nome,
         mensagem
       }
     }
     console.log(conteudoMensagem);

     await socket.emit("enviar_mensagem", conteudoMensagem);
     setlistaMensagem([ ...listaMensagem, conteudoMensagem.conteudo]);
     setMensagem("");
   }

  return (
    <div>
      <h1>Chat</h1>
      {!logado ?
      <>
      
        <label>Nome: </label>
        <input type="text" placeholder="Nome" name="nome" value={nome} onChange={(text) => {setNome(text.target.value)}}/>
        <br/><br/>
        <label>Sala: </label>
        {/*<input type="text" placeholder="Sala" value={sala} onChange={(text) => {setSala(text.target.value)}}/> */}
        <select name="sala" value={sala} onChange={text => setSala(text.target.value)}>
          <option value="">Selecione</option>
          <option value="1">Node.js</option>
          <option value="2">React</option>
          <option value="3">React Native</option>
          <option value="4">PHP</option>
        </select>
        <br/><br/>

        <button onClick={conectarSala}>Acessar</button>

      </>
       : 
       <>
{listaMensagem.map((msg, key) => {
  return(
    <div key={key}>
      {msg.nome}: {msg.mensagem}
    </div>
  )
})}

        <input type="text" name="mensagem" value={mensagem} placeholder="Mensagem..." onChange={(text) => {setMensagem(text.target.value)}} />
        <button onClick={enviarMensagem}>Enviar</button>
 
      </>
       }
    </div>
  );
}

export default App;
