import './App.css';
import Multiselect from 'multiselect-react-dropdown'
import { useState } from 'react';

function App() {

  const [options, setOptions] = useState(['option 1', 'option 2'])

  return (  
  <div>
    <h1>Trip Name</h1>
    <h2># of Guests</h2>

    <form>
      <input type="text" placeholder="Add new guest"/>
      <button type="submit">Add</button>
    </form>

    <form>
      <input type="text" placeholder="price"/>
      <input type="datetime-local"/>
      <select>
        <option value="" disabled selected hidden>Transfer To</option>
        <option>temp</option>
      </select>

      <Multiselect isObject={false} options={options} showCheckbox/>
    </form>

  </div>
  );
}

export default App;
