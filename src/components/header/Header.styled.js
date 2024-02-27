import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const HeaderItem = styled.ul`
  display: flex;
  margin: 0 auto;
`;

export const HeaderList = styled.li`
  padding-right: 50px;

  &:last-child {
    padding-right: 0px;
  }
`;

export const NavLinkStld = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;

  &.active::after {
    content: '';
    display: block;
    height: 2px;
    background-color: rgba(52, 112, 255, 1);
  }
`;
