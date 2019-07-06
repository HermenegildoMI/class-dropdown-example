import React from 'react';

const Option = ({onSelect, option}) => {
  const onSelectHandler = (e) => {
    e.preventDefault();
    onSelect(option);
  }

  return (<li onClick={onSelectHandler}>{option.value}</li>);
}
