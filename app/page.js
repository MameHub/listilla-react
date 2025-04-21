"use client"
import Item from "./componentes/Item";
import ItemList from "./componentes/ItemList";

export default function main() {
  return(
    <div>

      <h2>1. Crea un componente llamado Item que muestre un texto simple en un &lt;p&gt;.</h2>
      <Item/>
      <hr/>
      
      <h2>2. Crea otro componente llamado &lt;ItemList&gt; que contenga varios &lt;Item&gt; dentro de un &lt;div&gt;.</h2>
      <ItemList/>
      <hr/>

      <h2>3. Modifica Item para recibir text como prop y mostrarlo dinámicamente.</h2>
      <Item text = {"Funciona correctamente"}/>
      <hr/>

      <h2>4. Pasa diferentes textos desde ItemList a cada Item.</h2>
      <ItemList
        texto1 = "Primer texto introducido"
        texto3 = "Tercer texto introducido manteniendo el segundo como predeterminado de Item"
      />
      <hr/>

      <h2>5. Agrega un onClick a Item para mostrar un alert con el texto del item al hacer clic.</h2>
      {/* </> */}
      <hr/>

      <h2>6. Modifica Item para que al hacer clic cambie su color entre negro y azul</h2>
      {/* </> */}
      <hr/>

      <h2>7. Agrega un botón en ItemList que permita ocultar o mostrar la lista de Item.</h2>
      {/* </> */}
      <hr/>

      <h2>8. Agrega un botón en ItemList que agregue nuevos Item a la lista al hacer clic.</h2>
      {/* </> */}
      <hr/>

      <h2>9. Permite eliminar elementos de la lista.</h2>
      {/* </> */}
      <hr/>

      <h2>10. Usa un input para agregar nuevos elementos personalizados.</h2>
      {/* </> */}
      <hr/>

      <h2>11. Agrega animaciones al cambio de color o al agregar elementos.</h2>
      {/* </> */}
      <hr/>

    </div>
  );
}