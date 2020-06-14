import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PokeList = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const LoadMoreButton = styled.button`
  width: 200px;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 10px;

  border: none;
  border-radius: 10px;

  background-color: red;
  box-shadow: 2px 2px 3px black;

  font-weight: bold;
  font-size: 20px;

  &:hover {
    color: white;
    background-color: #851b1b;
    box-shadow: 3px 3px 4px black;
  }
  &:focus {
    outline: 0;
  }
`
