import { Link } from 'react-router-dom';

const Header = ({ token, setUser }) => {
  return (
    <div>
      <h1 className="bg-blue-500 text-red-500">Header</h1>
      {token ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          <Link to="/signup" className="bg-blue-500 border-black-500">
            Créer un compte
          </Link>
          <Link to="/login">Se connecter</Link>
        </>
      )}
    </div>
  );
};

export default Header;
