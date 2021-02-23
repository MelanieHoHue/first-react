import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
            <h1>Task Tracker {props.title}</h1>
            <Button
                color={props.showAddTask ? 'red' : 'green'}
                text={props.showAddTask ? 'Close' : 'Add'}
                onClick={props.onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: ''
}

Header.propTypes = {
    title: 
    PropTypes.string
}

export default Header
