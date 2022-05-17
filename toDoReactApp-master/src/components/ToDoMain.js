import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
import './todostyle.css';
// import todoData from './dataFolder/todoData';
//
//
// class ToDoMain extends Component {
//   constructor(){
//     super();
//     this.state = {
//       todos: todoData
//     };
//
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(id){
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo =>  {
//         if(todo.id === id){
//           todo.completed = !todo.completed
//         }
//         return todo;
//
//       })
//       return{
//         todos: updatedTodos
//       }
//     })
//
//   }
//
//   render(){
//     const todoitem = this.state.todos.map( item => <ToDoItem key ={item.id} item={item}
//       handleChange = {this.handleChange} />);
//     return (
//       <div className='todo-list'>
//         {todoitem}
//       </div>
//     );
//   }
// }


class ToDoMain extends Component{
  constructor(props){
    super(props);

    this.state = {
      items : []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e){
    //if not a empty submit then
    if (this._inputElement.value !== "") {
      //create a new array object
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      //setting up the state to update the task list
      this.setState((prevState)=>{
        return{
          items : prevState.items.concat(newItem)
        };
      });

      //empty the inputElement again for nxt values
      this._inputElement.value = "";
    }

    else {
      window.alert("Empty input field; Please enter some text..");
    }

    console.log(this.state.items); //checker
     // we are clearing the value of our input element
      //to make room for the next todo item.
    e.preventDefault();


  }    //synthetic event (e)

  deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}


  render(){
  return(
    <div className='todo-list'>
    <h2 className='todo-heading'>TASKS</h2>
      <form onSubmit={this.addItem}>

          <input ref={(a) => this._inputElement = a }
                 type='text' className='input'
                 placeholder='Enter task here' />
          <button type='submit' className='add'>ADD</button>

      </form>
      <ToDoItem entries={this.state.items}
                delete={this.deleteItem}/>
    </div>


  );
  }
}


export default ToDoMain;
