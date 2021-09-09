import React from 'react'

function Item({ price, name, category, net, currency, tax_pct, quantity }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{`Gross: ${currency} ${price}`}</p>
      <p>{`Net: ${currency} ${net} - tax (${tax_pct}%)`}</p>
      <p>Qty: {quantity}</p>
      <p>Cat: {category}</p>
    </div>
  );
}

export default Item;
