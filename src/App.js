import { useState } from 'react';
import './app.css';

export default function App(){
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [mensagemImc, setMensagemImc] = useState();

  function calcularImc(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6) {
      setMensagemImc("Você está abaixo do seu peso ideal! Seu IMC: " + imc.toFixed(2))
    } else if(imc >= 18.6 && imc < 24.9) {
      setMensagemImc("Você está no seu peso ideal! Seu IMC: " + imc.toFixed(2))
    } else if(imc >= 24.9 && imc < 34.9) {
      setMensagemImc("Você está levemente acima do seu peso ideal! Seu IMC: " + imc.toFixed(2))
    } else if(imc >= 34.9) {
      setMensagemImc("Cuidado, risco de obesidade! Seu IMC: " + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) Ex.: 80"
          value={peso}
          onChange={e => setPeso(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Altura em (cm) Ex.: 180"
          value={altura}
          onChange={e => setAltura(e.target.value)}
        />
        <button onClick={calcularImc}>
          Calcular
        </button>
      </div>

      <h2>{mensagemImc}</h2>

    </div>
  )
}