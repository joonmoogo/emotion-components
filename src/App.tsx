import './App.css'
import { BigButton, Button } from './emotion-components/Button'
import { Container } from './emotion-components/Container'
import { Layout } from './emotion-components/Layout'
import { ReactButton } from './react-components/Button'


function App() {

  const onClick = () => {
    alert('button is clicked');
  }
  return (
    <>
      <Container>
        <Layout>
          <BigButton>BigButton</BigButton>
          <Button onClick={onClick}>Button</Button>
          <ReactButton onClick={onClick} objtype='primary' content='hello'></ReactButton>
        </Layout>
      </Container>
    </>
  )
}

export default App
