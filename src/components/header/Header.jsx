import {
  ContainerWrapper,
  HeaderItem,
  HeaderList,
  NavLinkStld,
} from './Header.styled';

const Header = () => {
  return (
    <header>
      <nav>
        <ContainerWrapper>
          <HeaderItem>
            <HeaderList>
              <NavLinkStld to="/">Головна</NavLinkStld>
            </HeaderList>
            <HeaderList>
              <NavLinkStld to="/catalog">Каталог</NavLinkStld>
            </HeaderList>
            <HeaderList>
              <NavLinkStld to="/favorites">Улюблені</NavLinkStld>
            </HeaderList>
          </HeaderItem>
        </ContainerWrapper>
      </nav>
    </header>
  );
};

export default Header;
