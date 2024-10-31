import React from 'react';
import './CompressorImg.css';
import Compressor from 'compressorjs';
import { GlobalContext } from '../../GlobalContext';

const CompressorImg = (conteudoCompressor) => {
  const fileFormatado = conteudoCompressor.file;
  const [imagemProcessada, setImagemProcessada] = React.useState(null);
  const [imagemUrl, setImagemUrl] = React.useState(null);
  const [imagemProcessadaUrl, setImagemProcessadaUrl] = React.useState(null);
  const global = React.useContext(GlobalContext);

  console.log(global);
  global.setImage2(fileFormatado);
  React.useEffect(() => {
    if (fileFormatado) {
      new Compressor(fileFormatado, {
        quality: 0.6,
        maxHeight: conteudoCompressor.formInput.maxHeight,
        maxWidth: conteudoCompressor.formInput.maxWidth,
        minWidth: conteudoCompressor.formInput.minWidth,
        minHeight: conteudoCompressor.formInput.minHeight,
        resize: conteudoCompressor.redimensionar,
        success(result) {
          setImagemProcessada(result);
          const url = URL.createObjectURL(result);
          setImagemProcessadaUrl(url);
          global.setImage(result);
        },
      });
    }
  }, [fileFormatado]);

  React.useEffect(() => {
    if (fileFormatado) {
      const url = URL.createObjectURL(fileFormatado);
      setImagemUrl(url);
    }
  }, [fileFormatado]);

  return (
    <>
      <div className="imagem-de-entrada">
        <div className="titulo-imagem-de-entrada">
          <h2>
            Imagem de entrada <span>(imagem original)</span>
          </h2>
        </div>
        <div className="conteudo-imagem-de-entrada">
          <div className="imagem-item">
            {fileFormatado && <img src={imagemUrl} alt="Imagem original" />}
          </div>
          {fileFormatado && (
            <div className="conteudo-infos-imagem">
              <p>
                Última modificação <span>{fileFormatado.lastModified}</span>
              </p>
              <p>
                Última data modificação
                <span>
                  {fileFormatado.lastModifiedDate.toLocaleDateString()}
                </span>
              </p>
              <p>
                Nome <span>{fileFormatado.name}</span>
              </p>
              <p>
                Tipo <span>{fileFormatado.type}</span>
              </p>
              <p>
                Size <span>{(fileFormatado.size / 1024).toFixed(2)} Kb</span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="imagem-de-entrada">
        <div className="titulo-imagem-de-entrada">
          <h2>
            Imagem de Saída <span>(imagem compactada)</span>
          </h2>
          {imagemProcessadaUrl && (
            <a
              href={imagemProcessadaUrl}
              download={imagemProcessada.name || 'imagem-compactada.jpg'}
            >
              Baixar
            </a>
          )}
        </div>
        <div className="conteudo-imagem-de-entrada">
          <div className="imagem-item">
            {imagemProcessada && (
              <img src={imagemProcessadaUrl} alt="Imagem compactada" />
            )}
          </div>
          {imagemProcessada && (
            <div className="conteudo-infos-imagem">
              <p>
                Última modificação <span>{imagemProcessada.lastModified}</span>
              </p>
              <p>
                Última data modificação
                <span>
                  {imagemProcessada.lastModifiedDate.toLocaleDateString()}
                </span>
              </p>
              <p>
                Nome <span>{imagemProcessada.name}</span>
              </p>
              <p>
                Tipo <span>{imagemProcessada.type}</span>
              </p>
              <p>
                Size <span>{(imagemProcessada.size / 1024).toFixed(2)} Kb</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompressorImg;
