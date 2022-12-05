import { useDispatch, useSelector } from 'react-redux'
import './TodoList.css'
import {} from '../../store'

const TodoList = () => {
    return (<>
    <h2>할일 목록</h2>
    <table className='table'>
    <thead>
        <tr>
            <th>Todo List</th>   
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alfreds Futterkiste</td>  
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>   
        </tr>  
    </tbody>
    </table>
    </>)
}
export default TodoList