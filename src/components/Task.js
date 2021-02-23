import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3 key={task.id}>
               {task.text} <FaTimes style={{color: 'red'}}
               onClick={() => onDelete(task.id)}  />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

Task.defaultProps = {
    id: 0,
    text: 'Task',
    day: '01.01.1000'
}

Task.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    day: PropTypes.string
}

export default Task
