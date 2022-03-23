import { Link,Outlet } from "react-router-dom";
import "./index.css"

const Main = () => {
  return (
    <div>
      <nav className="nav">
        <div>
          <img 
          className="img"
          src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg" 
          alt="" />
        </div>
        <div className="lista">
         <ul>
          <li>
            <Link to="/">Pokemon</Link>
          </li>
          <li>
            <Link to="/flags">Banderas</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          </ul>   
        </div>
      </nav>
      <hr />
      {/*Esto va a recibir los componentes hijos */}
      <Outlet />
    </div>
  );
};

export default Main;
