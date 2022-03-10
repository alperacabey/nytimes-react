
import { Link } from 'react-router-dom'

import styled from "styled-components";
import {
  GlobalStyle,
  device,
} from "../../theme";

export const Container = styled.div`
  padding: 15px;
  margin: 40px auto;
  color: ${({ theme }: GlobalStyle) => theme.text};
  transition: all 0.5s linear;
  height: calc(100vh - 200px);
  @media only screen and ${device.sm} {
    max-width: 540px;
  }
  @media only screen and ${device.md} {
    max-width: 720px;
  }
  @media only screen and ${device.lg} {
    max-width: 1140px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  color: white;
  background: black;
`;

export const ListItem = styled.a`
  width: 100%;
  height: 30px;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  color: black;
  background: white;
`;


export const List = styled.ul`
  width: 100%;
  display: block;
  padding: 0px;
  box-sizing: border-box;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;