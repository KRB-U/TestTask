import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const HeaderItem = styled.ul`
  display: flex;
  margin: 0 auto;
`;

export const HeaderList = styled.li`
  padding-right: 20px;
`;

export const NavLinkStld = styled(NavLink)`
  text-decoration: none;

  &.active::after {
    content: '';
    display: block;
    height: 2px;
    background-color: rgba(52, 112, 255, 1);
  }
`;
