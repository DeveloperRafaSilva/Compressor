import React from 'react';
import './Select.css';

const Select = ({ opcoes, value, setValue, texto }) => {
  return (
    <div className="input-item-select">
      <p>{texto}</p>
      <select value={value} onChange={({ target }) => setValue(target.value)}>
        <option value="" disabled>
          selecione
        </option>
        {opcoes.map((opcao, index) => (
          <option key={index} value={opcao}>
            {opcao}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
