
import './App.css'

function App() {
// localStorage.clear();
// localStorage.setItem("name","prem")
// const name=localStorage.getItem("name")
localStorage.removeItem("name");
const user={
name:"prem",
password:"vbmb",
age:24,
city:"bhopal"
}
localStorage.setItem("user",JSON.stringify(user));
const usera=JSON.parse(localstorage.getItem("user"))

  return (
  <div>app is {name} </div>
  )
}

export default App
