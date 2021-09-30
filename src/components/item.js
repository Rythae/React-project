import React from 'react'
import "../styles/item.css"

function Item({ price, name, category, net, currency, tax_pct, quantity, amount }) {
  return (
    <div className="item-container">
      <h3>{name}</h3>
      <p>{`Unit Price: ${currency} ${price}`}</p>
      <p>{`Amount:  ${currency} ${amount}`}</p>
      <p>{`Total: ${currency} ${net} (+ tax: ${tax_pct}%)`}</p>
      <p>Qty: {quantity}</p>
      <p>Cat: {category}</p>
    </div>
  );
}

export default Item;
