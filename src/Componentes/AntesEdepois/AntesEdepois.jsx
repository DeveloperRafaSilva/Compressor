import React from 'react';
import './AntesEdepois.css';
import { GlobalContext } from '../../GlobalContext';

const AntesEdepois = () => {
  const global = React.useContext(GlobalContext);
  const [linha, setLinha] = React.useState(50); // Estado da posição da linha
  const [isDragging, setIsDragging] = React.useState(false); // Estado para arrastar a linha

  const imagemAntesUrl = global.imagem
    ? URL.createObjectURL(global.imagem)
    : '';
  const imagemDepoisUrl = global.imagem2
    ? URL.createObjectURL(global.imagem2)
    : '';

  const moverLinha = (e) => {
    e.preventDefault();
    if (isDragging) {
      const container = e.currentTarget.getBoundingClientRect();
      const leftX = e.clientX - container.left;
      const novaLinha = Math.min(
        Math.max((leftX / container.width) * 100, 0),
        100,
      );
      setLinha(novaLinha);
    }
  };

  const iniciarArrasto = () => {
    setIsDragging(true);
  };

  const pararArrasto = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="antes-e-depois"
      onMouseMove={moverLinha}
      onMouseUp={pararArrasto}
      onMouseLeave={pararArrasto}
    >
      <div className="imagem-item antes" style={{ width: `${linha}%` }}>
        {imagemAntesUrl && <img src={imagemAntesUrl} alt="Antes" />}
      </div>
      <div
        className="linha-horizontal"
        style={{ left: `${linha}%` }}
        onMouseDown={iniciarArrasto}
      ></div>
      <div className="imagem-item depois" style={{ width: `${100 - linha}%` }}>
        {imagemDepoisUrl && <img src={imagemDepoisUrl} alt="Depois" />}
      </div>
    </div>
  );
};

export default AntesEdepois;
