import React from 'react';
import Input from '../Input';
import Select from '../Selected/Select';
import './Opcoes.css';
import CompressorImg from '../CompressorImg/CompressorImg';
import '../../Componentes/Principal.css';

const Opcoes = () => {
  const [redimensionar, setRedimensionar] = React.useState();
  const [qualidade, setQualidade] = React.useState();
  const [formInput, setFormInput] = React.useState({
    maxWidth: '',
    maxHeigth: '',
    minWidth: '',
    minHeigth: '',
    width: '',
    Heigth: '',
    tipo: '',
    tamanho: '',
  });
  const [file, setFile] = React.useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  }

  function comprimirImagem(e) {
    const fileImg = e.target.files[0];
    setFile(fileImg);
  }

  return (
    <section>
      <div className="input-file">
        <label htmlFor="image">Adicione uma imagem</label>
        <input onChange={comprimirImagem} type="file" id="image" name="image" />
      </div>
      <div className="Grid-processamento">
        <form className="formulario-opcoes">
          <div className="titulo">
            <h1>OPÇÕES</h1>
          </div>
          <div className="opcoes-input-item">
            <Input
              value={setFormInput.maxWidth}
              onevent={handleChange}
              tipo="number"
              id="max-width"
              name="max-width"
              label="Largura máxima"
            />
          </div>
          <div className="opcoes-input-item">
            <Input
              value={setFormInput.maxHeigth}
              onevent={handleChange}
              tipo="number"
              id="max-height"
              name="max-height"
              label="Altura máxima"
            />
          </div>
          <div className="opcoes-input-item">
            <Input
              value={setFormInput.minWidth}
              onevent={handleChange}
              tipo="number"
              id="min-width"
              name="min-width"
              label="Largura minima"
            />
          </div>
          <div className="opcoes-input-item">
            <Input
              value={setFormInput.minHeigth}
              onevent={handleChange}
              tipo="number"
              id="min-height"
              name="min-height"
              label="Altura minina"
            />
          </div>
          <div className="opcoes-input-item">
            <Input
              value={setFormInput.width}
              onevent={handleChange}
              tipo="number"
              id="width"
              name="width"
              label="largura"
            />
          </div>
          <div className="opcoes-input-item">
            <Input
              value={setFormInput.Heigth}
              onevent={handleChange}
              tipo="number"
              id="altura"
              name="altura"
              label="Altura"
            />
          </div>
          <div className="opcoes-input-item">
            <Select
              opcoes={['conter', 'Cobrir']}
              value={redimensionar}
              setValue={setRedimensionar}
              texto="Redimensionar"
            />
          </div>
          <div className="opcoes-input-item">
            <Select
              opcoes={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0, 7, 0.8, 0.9, 'NAN']}
              value={qualidade}
              setValue={setQualidade}
              texto="Qualidade"
            />
          </div>
          <div className="opcoes-input-item">
            <Input
              value={setFormInput.tipo}
              onevent={handleChange}
              tipo="text"
              id="tipos"
              name="tipos"
              label="Coverter tipos"
            />
          </div>
          <div className="opcoes-input-item">
            <Input
              value={setFormInput.tamanho}
              onevent={handleChange}
              tipo="number"
              id="tamanhos"
              name="tamanhos"
              label="Converter tamanhos"
            />
          </div>
        </form>
        <div>
          <CompressorImg
            file={file}
            redimensionar={redimensionar}
            qualidade={qualidade}
            formInput={formInput}
          />
        </div>
      </div>
    </section>
  );
};

export default Opcoes;
