import React from 'react'
import "../styles/item.css"

function ItemTable({ price, name, category, net, currency, tax_pct, quantity, amount }) {
  return (
    <div className="table-container">
           <div>{name}</div>
          <div>{quantity}</div>
          <div>{category}</div>
          <div>{`${currency} ${price}`}</div>
          <div>{`${currency} ${amount}`}</div>
          <div>{`${currency} ${net} (+ tax: ${tax_pct}%)`}</div>
    </div>
  );
}

export default ItemTable;
