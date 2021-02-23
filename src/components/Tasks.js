import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
          {tasks.map((task, index) => (
            <Task
                key={index}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle} />
            )) }  
        </>
    )
}

Tasks.defaultProps = {
    id: 0,
    text: 'Task',
    day: '01.01.1000'
}

Tasks.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    day: PropTypes.string
}

export default Tasks
