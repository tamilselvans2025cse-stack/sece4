import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      <h2>Welcome, Tamil!</h2>

      <div className="cards">
        <div className="card">
          <h3>Name</h3>
          <p>Tamil</p>
        </div>

        <div className="card">
          <h3>Subjects</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Attendance</h3>
          <p>90%</p>
        </div>
      </div>
    </div>
  );
}

export default App;
