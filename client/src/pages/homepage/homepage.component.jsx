import React from 'react'
import styled from 'styled-components'

import Directory from '../../components/directory/diretory.component'

const HomePageContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`
const HomePage = () => (
   <HomePageContainer>
     <h1>Blixt-mof-Bits</h1>
      <Directory/>
   </HomePageContainer>

)

export default HomePage