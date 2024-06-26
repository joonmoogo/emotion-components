import './App.css'
import { BigButton, Button } from './emotion-components/Button'
import { Container } from './emotion-components/Container'
import { Layout } from './emotion-components/Layout'
import { ReactButton } from './react-components/Button'


function App() {

  return (
    <>
      <Container>
        <Layout>
          <BigButton>BigButton</BigButton>
          <Button>Button</Button>
        </Layout>
      </Container>
    </>
  )
}

export default App
