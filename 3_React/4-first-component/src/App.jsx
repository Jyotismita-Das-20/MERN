import './App.css'
import Heading from './components/heading'
import Paragraph from './components/paragraph'
import {DangerButton, SuccessButton} from './components/Button'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'
import Title from './components/Title'

function App() {

  return (
    <>
      <Title titleText = "Hello World"/>
      <Title titleText = "KG coding"/>
      <Title titleText = "Subscribe"/>
      <Title titleText = "Learning Props"/>
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <Heading/>
      <Paragraph/>
      <DangerButton />
      <SuccessButton />
      <DynamicComponent />
      <DynamicComponent />
      <DynamicComponent />
      <StudentList />
    </>
  )
}

export default App
