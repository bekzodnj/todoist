import React, {Component} from 'react';
import './TodoListItem.css';


export default class TodoListItem extends Component{
	
	render(){
		
		const { label, onDeleted, done, important,
			    toggleDone, toggleImportant} = this.props;
		
		let classNames = 'todo-list-item';

		if(done){
			classNames += ' done';
		}

		if(important){
			classNames += ' important';
		}

		return(
			<span className={classNames}>
				<span
				 className="todo-list-item-label"
				 onClick = {toggleDone}
				>
					{label}
				</span>

				<button type="button"
					className="btn btn-outline-success btn-sm float-right"
					onClick={toggleImportant}>
				<i className="fa fa-thumb-tack"></i>
				</button>

				<button type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick={onDeleted}>
				<i className="fa fa-trash-o">&times;</i>
				</button>
			</span>
		);
	}
}
