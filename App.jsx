import { Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import TodoInput from "./components/todos/TodoInput"

const App = () => {
  return (<>
  <h1> 리액트 홈 </h1>
  <Routes>
  <Route path="/" element={<Counter/>}></Route>
  <Route path="/todos" element={<TodoInput/>}></Route>
  </Routes></>)
}
export default App