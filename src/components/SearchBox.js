import React from 'react';

const SearchBox = (props) => (
  <input
    type="text"
    value={props.value}
    className="form-control"
    onChange={props.onChange}
    placeholder="Ingrese nombre o apellido para buscar"
  />
);

export default SearchBox;