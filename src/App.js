import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import {Container, Conteudo, Header, Form, Campo, Label, Input, Select, BtnAcessar, HeaderChat,
   ImgUsuario, NomeUsuario, ChatBox, ConteudoChat, MsgEnviada, DetMsgEnviada, TextMsgEnviada, MsgRecebida, DetMsgRecebida, TextMsgRecebida, EnviarMsg, CampoMsg, BtnEnviarMsg} from './styles/styles';

let socket;

function App() {

  const ENDPOINT = "http://localhost:8080/";  // Aqui faz a ligação com o backend

  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState("");
  const [sala, setSala] = useState(""); 

 /* const [logado, setLogado] = useState(true);
  const [nome, setNome] = useState("César");
  const [sala, setSala] = useState("1"); */

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
    <Container>
      {!logado ?
      <Conteudo>
        <Header>Chat</Header>
          <Form>
            <Campo>
              <Label>Nome: </Label>
              <Input type="text" placeholder="Nome" name="nome" value={nome} onChange={(text) => {setNome(text.target.value)}}/>
            </Campo>
            <Campo>
              <Label>Sala: </Label>
              {/*<input type="text" placeholder="Sala" value={sala} onChange={(text) => {setSala(text.target.value)}}/> */}
              <Select name="sala" value={sala} onChange={text => setSala(text.target.value)}>
                <option value="">Selecione</option>
                <option value="1">Node.js</option>
                <option value="2">React</option>
                <option value="3">React Native</option>
                <option value="4">PHP</option>
              </Select>
            </Campo>

              <BtnAcessar onClick={conectarSala}>Acessar</BtnAcessar>
          </Form>
      </Conteudo>
       : 
       <ConteudoChat>
         <HeaderChat>
            <ImgUsuario src="usuario.png" alt={nome} />
            <NomeUsuario>{nome}</NomeUsuario>
         </HeaderChat>

            <ChatBox>
            {listaMensagem.map((msg, key) => {
                  return(
                   <div key={key}>
                      {nome === msg.nome ? 
                        <MsgEnviada>
                          <DetMsgEnviada>
                            <TextMsgEnviada>{msg.nome} : {msg.mensagem}</TextMsgEnviada>
                          </DetMsgEnviada>
                        </MsgEnviada>
                      : 
                        <MsgRecebida>
                          <DetMsgRecebida>
                            <TextMsgRecebida>{msg.nome} : {msg.mensagem}</TextMsgRecebida>
                          </DetMsgRecebida>
                        </MsgRecebida>
                      }

                   </div>
                  )
                })}
            </ChatBox>
                  <EnviarMsg>
                    <CampoMsg type="text" name="mensagem" value={mensagem} placeholder="Mensagem..." onChange={(text) => { setMensagem(text.target.value) }} />
                    <BtnEnviarMsg onClick={enviarMensagem}>Enviar</BtnEnviarMsg>
                  </EnviarMsg>
            
      </ConteudoChat>
       }
    </Container>
  );
}

export default App;
