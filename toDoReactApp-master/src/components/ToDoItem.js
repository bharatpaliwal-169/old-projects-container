import React from 'react';
import './todostyle.css';
//
//
// function ToDoItem(props){
// //adding styles after task completion...
//
//
//   return(
//     <div className='todo-item'>
//       <input type='checkbox'
//              Checked ={props.item.completed}
//              onChange={() => props.handleChange(props.item.id)} />
//
//       <p> {props.item.text} </p>
//     </div>
//   );
// }
//

class ToDoItem extends React.Component{

  constructor(props){
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(item){
    return (
      <li
        onClick={()=>this.delete(item.key)}
        key={item.key}> {item.text}
      </li>
    );
  }

  delete(key){
    this.props.delete(key);

    
  }
  render(){
    //copy of the items from ToDoMain
    const todoEntries = this.props.entries;   //array
    const listItem = todoEntries.map(this.createTask);

    return(
      <div className='todo-item'>
          <ul className='theList'>{listItem}</ul>
      </div>

    );
  }
}


export default ToDoItem;
