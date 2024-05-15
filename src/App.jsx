import { useState } from 'react'
import { MainWrapper, FundoCalculadora, TelaCalculadora, Teclado, Botão, InputConta } from './Estilos'


function App() {

  const teclas = ["1","2","3","4","5","6","7","8","9","0"]
  const listaTeclas = teclas.map(tecla => <Botão onClick={() => handleClick(tecla)}>{tecla}</Botão>)

  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const handleClick = (value) => {
    setExpressao(expressao + value);
  }

  const calcularResultado = () => {
    try{
       const resultadoCalculado = eval(expressao);
       setResultado(resultadoCalculado)
       setExpressao(resultadoCalculado)
    }catch(error){
      setResultado('Erro')
    }
  }

  return (
    <MainWrapper>
        <FundoCalculadora>
          <TelaCalculadora>
            <InputConta type="text" value={expressao} readOnly>
            </InputConta>
          </TelaCalculadora>
          <Teclado>
              {listaTeclas}
              <Botão onClick={() => handleClick("+")}>+</Botão>
              <Botão onClick={() => handleClick("-")}>-</Botão>
              <Botão onClick={() => handleClick("*")}>X</Botão>
              <Botão onClick={() => handleClick("/")}>÷</Botão>
              <Botão igual onClick={calcularResultado}>=</Botão>
          </Teclado>
        </FundoCalculadora>
    </MainWrapper>
  )
}

export default App
