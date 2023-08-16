import { useState } from 'react';

function Form({ onSubmit }) {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (e, setInput) => {
      setInput(e.target.value);
      setError('');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (input1.length < 3 || input1.trim() !== input1) {
        setError('Por favor chequea que la información sea correcta');
        return;
      }
  
      if (input2.length < 6) {
        setError('Por favor chequea que la información sea correcta');
        return;
      }
  
      onSubmit({ input1, input2 });
      setInput1('');
      setInput2('');
      setError('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Input 1:</label>
          <input type="text" value={input1} onChange={(e) => handleInputChange(e, setInput1)} />
        </div>
        <div>
          <label>Input 2:</label>
          <input type="text" value={input2} onChange={(e) => handleInputChange(e, setInput2)} />
        </div>
        <button type="submit">Enviar</button>
        {error && <p>{error}</p>}
      </form>
    );
  }
  
  export default Form;
