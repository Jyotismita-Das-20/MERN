import Container from './Container'
import style from './App.module.css'

function App() {

  return (
    <>
      <Container>
        <h1 className={style.heading}>Learning css modules</h1>
        <p className={`${style.para} ${style.heading}`}>This is a sample paragraph</p>
      </Container>

      <Container>This is another random text</Container>
    </>
  )
}

export default App;
