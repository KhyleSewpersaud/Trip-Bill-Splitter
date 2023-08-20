import "./App.css";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const [transferTo, setTransferTo] = useState("");

  const [options, setOptions] = useState();

  const [description, setDescription] = useState("");
  const [guest, setGuest] = useState("");

  const handleExpenseSubmit = (ev) => {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({price, date, description})
    }).then(res => {
      res.json().then((json) => {
        console.log('result', json)
      });
    });
  }

  return (
    <div className="temp">
      <div className="main">
        <div>
          <h1>Trip Name</h1>
          <form className="add-expense" onSubmit={handleExpenseSubmit}>
            <div className="info-basics">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
              <input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="info-logistics">
              <select>
                <option disabled selected defaultValue={true} hidden>
                  Transfer To
                </option>
                <option>temp</option>
                <option>temp2</option>
              </select>
              <Multiselect
                isObject={false}
                options={options}
                showCheckbox
                placeholder="Add Who Owes"
                className="multi"
              />
            </div>

            <input
              type="text"
              placeholder="Description"
              className="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="expense-submit">
              Add
            </button>
          </form>

          <div className="transactions">
            <div className="transaction">
              <div className="left">
                <div className="description-output">Lunch</div>
                <div className="date-output">2023-08-18 9:27am</div>
              </div>
              <div className="right">
                <div className="transfer-to-output">$150 to Bob</div>
                <div className="who-owes-output">
                  <Multiselect
                    isObject={false}
                    options={options}
                    showCheckbox
                    hideSelectedList
                    placeholder="Add Who Owes"
                    className="multi"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="guest">
          <h2>Guest List</h2>
          <form className="add-guest">
            <div className="add-guest-style">
              <input
                type="text"
                placeholder="Add new guest"
                className="add-guest-box"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
              />
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
