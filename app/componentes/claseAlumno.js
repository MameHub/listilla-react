function Alumno({nombre, apellidos}) {
    const handleClick = (e) => {
      e.target.style.color = e.target.style.color === "blue" ? "yellow" : "blue";
    }
    return (
      <>
        <li onClick={handleClick}>{nombre}</li>
        <li>{apellidos}</li>
      </>
    );
  }
  
  export default function Clase() {
    return (
      <>
        <Alumno nombre="Álvaro" apellidos="Cañas González"/>
        <Alumno nombre="Jose" apellidos="Pérez García"/>
        <Alumno nombre="Naza" apellidos="Espino López"/>
      </>
    );
  }