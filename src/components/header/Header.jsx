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
              <NavLinkStld to="/" $activeClassName="active">
                Головна
              </NavLinkStld>
            </HeaderList>
            <HeaderList>
              <NavLinkStld to="/catalog" $activeClassName="active">
                Каталог
              </NavLinkStld>
            </HeaderList>
            <HeaderList>
              <NavLinkStld to="/favorites" $activeClassName="active">
                Улюблені
              </NavLinkStld>
            </HeaderList>
          </HeaderItem>
        </ContainerWrapper>
      </nav>
    </header>
  );
};

export default Header;
