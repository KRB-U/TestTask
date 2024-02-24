import { NavLinkStld } from './Header.styled';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLinkStld to="/">Головна</NavLinkStld>
          </li>
          <li>
            <NavLinkStld to="/catalog">Каталог</NavLinkStld>
          </li>
          <li>
            <NavLinkStld to="/favorites">Улюблені</NavLinkStld>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
