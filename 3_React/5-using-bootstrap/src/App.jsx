import {Camera, Trash2} from 'lucide-react';
function App() {

  return (
    <>
      <p className="my-text">This is a piece of text</p>
      <p className="text-primary bg-success-subtle mb-5 fw-lighter w-25">This is a piece of text</p>
      <p className="text-primary bg-success-subtle">This is a piece of text</p>

      <ul className="list-group m-3 list-group-numbered">
        <li className="list-group-item">Home</li>
        <li className="list-group-item active">Contact</li>
        <li className="list-group-item disabled shadow-lg">Product</li>
      </ul><br />
      <Camera color='red' size={72}/>
      <Trash2 color='red' size={72}/>
    </>
  )
}

export default App
