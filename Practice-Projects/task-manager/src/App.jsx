import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (


    <div className='task-container'>
      <h2 className='title'>TASK MANAGER</h2>

      <div className='input-section'>
        <input type="text" placeholder='Enter the task..' />
        <select>
          <option>Top Priority</option>
          <option>Medium Priority</option>
          <option>Low Priority</option>
        </select>
        <input type="date" />
        <button className='add-btn'>Add</button>
      </div>

      <div className='table-section'>
        <h3>Upcoming task</h3>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className='table-section'>
        <h3>Comleted task</h3>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Priority</th>
              <th>Deadline</th>
            </tr>
          </thead>
        </table>
      </div>

    </div>


  );
}

export default App
