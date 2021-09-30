import React from 'react'
import Item from "./item"
import "../styles/items.css"
import ItemTable from "./itemTable"

function Items({ items, setTaxTotal, setOrderTotal}) {
  let orderTotal = 0;
  let taxTotal = 0;
  return (
    <div className="items-container">
      {items.map(
        ({ price, quantity, tax_pct, currency, category, name }, index) => {
          const amount = price * quantity;
          const tax = (amount * tax_pct * quantity) / 100;
          const net = amount + tax;
          orderTotal += price;
          taxTotal += tax;
          setOrderTotal(orderTotal);
          setTaxTotal(taxTotal);
          return (
            <ItemTable
              name={name}
              price={price}
              quantity={quantity}
              tax_pct={tax_pct}
              currency={currency}
              category={category}
              key={index}
              net={net}
              amount={amount}
            />
          );
        }
      )}
    </div>
  );
}


export default Items;

