import '../App';

function Header() {
  return (
    <header className="header">
      <h1>Mi Página Personal</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre mí</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
