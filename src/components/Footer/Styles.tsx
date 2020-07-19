import styled from 'styled-components'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Github } from '@styled-icons/boxicons-logos/Github'

export const LinkedinButton = styled(Linkedin)`
  width: 30px;

  margin-left: 5px;
  margin-right: 5px;

  color: white;
  
  &:hover{
    color: #0077B5;
  }
`

export const TwitterButton = styled(Twitter)`
  width: 30px;

  margin-left: 5px;
  margin-right: 5px;

  color: white;

  &:hover{
    color: #1A91DA;
  }
`

export const GithubButton = styled(Github)`
  width: 30px;

  color: white;
  
  margin-left: 5px;
  margin-right: 5px;

  &:hover{
    color: black;
  }
`

export const Container = styled.div`
  width: 100%;
  height: auto;

  left: 0; bottom: 0;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;

  color: white;
  background-color: #E12B38;
`

export const SocialMedias = styled.div`
  width: 100%;
`