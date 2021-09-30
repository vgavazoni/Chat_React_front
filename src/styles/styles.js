import styled from "styled-components";
// css em formato de componente, após fazer aqui, chamo em app.js
export const Container = styled.section`
    background: #FFF;
    width: 450px;
    max-width: 450px;
    border-radius: 16px;
    box-shadow: 0 0 128px 0 rgba(0,0,0,0.1),
    0 32px 64px -48px rgba(0,0,0,0.5);
`;

export const Conteudo = styled.section`
    padding: 25px 30px;
`;

export const Header = styled.section`
    font-size: 25px;
    font-weight: 800;
    padding-bottom: 10px;
    border-bottom: 1px solid #F7f7f7;
    color: #5241c0;
    text-align: center;
`;

export const Form = styled.form`
    margin: 20px 0;
`;

export const Campo = styled.div`
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    position: relative;
`;

export const Label = styled.label`
    margin-bottom: 4px;
    margin-top: 10px;
    color: slateblue;
    font-weight: 600;
`;

export const Input = styled.input`
    height: 40px;
    width: 390px;
    font-size: 16px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Select = styled.select`
    height: 40px;
    width: 390px;
    font-size: 16px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const BtnAcessar = styled.button`
    border: none;
    color: #FFF;
    font-size: 17px;
    background: #5241c0;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    margin-top: 13px;
`;

export const ConteudoChat = styled.section`
    padding: 25px 0px;
    background: #e9dbff;
`;

export const HeaderChat = styled.header`
    width: 400px;
    display: flex;
    align-items: center;
    padding: 18px 30px;
    color: #6f6f6f;
`;

export const ImgUsuario = styled.img`
    height: 45px;
    width: 45px;
    margin: 0 15px;
`;

export const NomeUsuario = styled.div`
    font-size: 17px;
    font-weight: 600;
`;

export const ChatBox = styled.div`
    position: relative;
    min-height: 500px;
    max-height: 500px;
    overflow-y: auto;
    padding: 10px 10px 20px 10px;
    background: #F7f7f7;
    box-shadow: inset 0 32px 32px -32px rgba(0 0 0 / 5%),
                inset 0 -32px 32px -32px rgba(0 0 0 / 5%);
`;

export const MsgEnviada = styled.div`
    margin: 15px 0px 15px 0;
    display: flex;
`;

export const DetMsgEnviada = styled.div`
    margin-left: auto;
    max-width: calc(100% - 130px);
`;

export const TextMsgEnviada = styled.p`
    background: #886db2;
    color: #FFF;
    border-radius: 18px 18px 0 18px;
    word-wrap: break-word;
    padding: 8px 16px;
    box-shadow: 0 0 32px rgba(0 0 0 / 8%),
                0rem 16px 16px -16px rgba(0 0 0 / 10%);
`;

export const MsgRecebida = styled.div`
    margin: 15px 0px 15px 0;
    display: flex;
    align-items: flex-end;
`;

export const DetMsgRecebida = styled.div`
    margin-right: auto;
    max-width: calc(100% - 130px);
`;

export const TextMsgRecebida = styled.p`
    background: #58b666;
    color: #FFF;
    border-radius: 18px 18px 18px 0px;
    word-wrap: break-word;
    padding: 8px 16px;
    box-shadow: 0 0 32px rgba(0 0 0 / 8%),
                0rem 16px 16px -16px rgba(0 0 0 / 10%);
`;

export const EnviarMsg = styled.div`
    padding: 18px 15px;
    display: flex;
    justify-content: space-between;

`;

export const CampoMsg = styled.input`
    height: 45px;
    width: calc(100% - 58px);
    font-size: 16px;
    padding: 0 13px;
    border: 1px solid #5e4389;
    outline: none;
    border-radius: 5px 0 0 5px;
`;

export const BtnEnviarMsg = styled.button`
    background: #5e4389;
    color: #fff;
    border: none;
    outline: none;
    font-size: 15px;
    width: 70px;
    padding: 6px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
`;