import { connect } from 'react-redux'
import toDoList from '../../components/toDoList/ToDoList'

const mapStateToProps = state => {
    return {
        toDoList: state.toDo.toDoList
    }
}

export default connect(mapStateToProps)(toDoList)