import { Route, Routes } from "react-router-dom"
import Main from "./components/home/Main"
import Counter from "./components/home/Counter"
import TodoInput from "./components/todos/TodoInput"

const App = () => {
  return (<>
  <h1> 리액트 홈 </h1>
  <Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/counter" element={<Counter/>}></Route>
  <Route path="/todos" element={<TodoInput/>}></Route>
  </Routes></>)
}
export default App