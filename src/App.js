import "./styles.css";

export default function App() {
  const name = "k3nd0";
  let date = new Date();
  const year = date.getFullYear();
  return (
    <div className="App">
      <h1>Created by {name}</h1>
      <h2>Copyright &copy; {year} </h2>
    </div>
  );
}
