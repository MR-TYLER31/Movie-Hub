import styled from 'styled-components';

interface INav {
  isOpen: boolean;
}

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: black;
  background-image: linear-gradient(to right, black, #35014d, #a206c9);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const MenuLink = styled.a`
  padding: 1rem 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  &:hover {
    color: white;
    text-decoration: none;
  }
  @media (max-width: 1100px) {
    padding: 10px;
  }
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  // color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 2.5rem;
  &:hover {
    text-decoration: none;
    color: white;
  }
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div<INav>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  span {
    height: 20px;
    width: 2px;
    background: white;
    border-radius: 5px;
  }
  @media (max-width: 1100px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    span {
      display: none;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1100px) {
    display: flex;
  }
`;


export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: blue;
  padding: 12px 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const SearchIconBtn = styled.button`
  background-color: white;
  border: none;
  margin-left: 2px;
`;
