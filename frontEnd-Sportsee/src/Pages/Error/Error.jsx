import ErrorStyles from "./__Error.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main>
      <div className="errorContainer">
        <h1 className="errorContainer__title">404</h1>
        <p className="errorContainer__subTitle">Page Error</p>
        <p className="errorContainer__pargraph">
          {"La page que vous recherchez n'existe pas ou est introuvable"}
        </p>
        <Link to="/">
          <p className="error__return">{"Retourner sur la page d'accueil"}</p>
        </Link>
      </div>
    </main>
  );
}
