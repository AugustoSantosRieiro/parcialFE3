import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData && <Card data={formData} />}
    </div>
  );
}

export default App;