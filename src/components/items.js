import React from 'react'
import Item from "./item"

function Items({ items, setTaxTotal, setOrderTotal }) {
  let orderTotal = 0;
  let taxTotal = 0;
  return (
    <div>
      {items.map((item, index) => {
        const tax = (item.price * item.tax_pct * item.quantity) / 100;
        const net =
        item.price + tax;
        orderTotal += item.price;
        taxTotal += tax;
        setOrderTotal(orderTotal);
        setTaxTotal(taxTotal);
        return <Item {...item} key={`_${index}`} net={net} />;
      })}
    </div>
  );
}


export default Items;

