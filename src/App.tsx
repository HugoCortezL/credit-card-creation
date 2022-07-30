import Home from './pages/Home'
import styled from 'styled-components'

const AllContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
function App() {
  return (
    <AllContainer>
      <Home/>
    </AllContainer>
  )
}

export default App
