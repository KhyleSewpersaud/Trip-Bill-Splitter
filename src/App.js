import './App.css';
import Multiselect from 'multiselect-react-dropdown'
import { useState } from 'react';


function App() {

  const [options, setOptions] = useState(['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8'])

  return (  
    <div className='temp'>
      <div className='main'>
    <div>
      <h1>Trip Name</h1>
      <form className='add-expense'>
        <div className='info-basics'>
          <input type="text" placeholder="Price"/>
          <input type="datetime-local"/>
        </div>

        <div className='info-logistics'>
          <select>
            <option value="" disabled selected hidden>Transfer To</option>
            <option>temp</option>
          </select>
          <Multiselect isObject={false} options={options} showCheckbox placeholder='Add Who Owes' className='multi'/>
        </div>
  
        <input type='text' placeholder='Description' className='description'/> 
        <button type='submit' className='expense-submit'>Add</button>
      </form>

      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='description-output'>Lunch</div>
            <div className='date-output'>2023-08-18 9:27am</div>
          </div>
          <div className='right'>
            <div className='transfer-to-output'>$150 to Bob</div>
            <div className='who-owes-output'>
              <Multiselect isObject={false} options={options} showCheckbox hideSelectedList placeholder='Add Who Owes' className='multi'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='guest'>
      <h2>Guest List</h2>
      <form className='add-guest'>
        <div className='add-guest-style'>
          <input type="text" placeholder="Add new guest" className='add-guest-box'/>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  </div>
    </div>
  
  );
}

export default App;
