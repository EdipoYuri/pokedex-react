import React from 'react'
import { 
  Container,
  TwitterButton,
  LinkedinButton,
  GithubButton,
  SocialMedias
} from './Styles'

function Footer(){
  return (
    <Container>
      <p>Created by Édipo Yuri</p>
      <SocialMedias>
        <a 
          target='_blank' 
          rel='noopener noreferrer'
          href='https://twitter.com/EdipoYuri'
          title='Twitter link'
        >
          <TwitterButton/>
        </a>
        <a 
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/edipoyurirs/'
          title='LinkedIn link'
        >
          <LinkedinButton/>
        </a>
        <a 
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/EdipoYuri'
          title='GitHub link'
        >
          <GithubButton/>
        </a>
      </SocialMedias>
    </Container>
  )
}

export default Footer