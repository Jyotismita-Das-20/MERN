import './App.css'
import Heading from './components/heading'
import Paragraph from './components/paragraph'
import {DangerButton, SuccessButton} from './components/Button'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'

function App() {

  return (
    <>
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
