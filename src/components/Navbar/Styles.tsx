import styled from 'styled-components'
import { Link as RouterLink} from 'react-router-dom'

export const Bar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #E12B38;
  color: #F5F7FA;
  font-size: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`

export const Link = styled(RouterLink)`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  
  text-decoration: none;
  cursor: default;
`
