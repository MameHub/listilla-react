"use client"
import Item from "./componentes/Item";
import ItemList from "./componentes/ItemList";

export default function main() {
  return(
    <div>

      <h2>1. Crea un componente llamado Item que muestre un texto simple en un &lt;p&gt;</h2>
      <Item/>
      <hr/>
      
      <h2>2. Crea otro componente llamado &lt;ItemList&gt; que contenga varios &lt;Item&gt; dentro de un &lt;div&gt;</h2>
      <ItemList/>
      <hr/>

    </div>
  );
}