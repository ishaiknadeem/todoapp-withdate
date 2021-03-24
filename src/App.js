import React from 'react';
import {useState, useEffect} from 'react';
import uuid from 'react-uuid'
import {Container, CssBaseline} from '@material-ui/core';
import HeaderComponent from './HeaderComponent';
import TodoListComponent from './TodoListComponent'
import FormDialogComponent from './FormDialogComponent';
import { useFormik } from 'formik';

// local storage
function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => JSON.parse(window.localStorage.getItem(key)) ||
     defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

const getCurrentDate = () =>{
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

function App() {

  // const [inputValue, setInputValue] = useState('');
  // const [todos, setTodos] = useLocalStorageState('todos', []);
//   const [isEditModelOpen, setEditModelOpen] = useState(false);
//   const [editTodoState, setEditTodoState] = useState({})

//   const handleSubmit =(e) => {
//     e.preventDefault();
//     if (inputValue==='') return;
//     setTodos([...todos, { id: uuid(), val: inputValue, done: false} ])
//     setInputValue(' ')
//   }

//   const handleChange = (e) =>{
//     setInputValue(e.target.value);
// }

//   const deleteTodo = (todo) => {
//     setTodos(todos.filter((t) => t.id !== todo.id))
//   }
  
//   const editTodo =(todo) =>{
//     setEditModelOpen(true);
//     setEditTodoState(todo);
//   }

//   const updateTodo= (todoText) => {
//     // e.preventDefault();
//     const newTodos = [...todos];
//     const t=newTodos.find(t => t.id == editTodoState.id)
//     t.val = todoText;
//     setTodos(newTodos);
//     setEditTodoState({}); 
//     setEditModelOpen(false);

//   }

  const handleMarkDone = (todo) => {
      const newTodos = [...todos];
      const t= newTodos.find(t => t.id == todo.id)
      t.done = !t.done;
      setTodos(newTodos);
  }



const [todos, setTodos] = useState([{id: 1, val:'todoTt', priority:'LOw', dueDate:'2020-03-24', done: false}, {id: 2, val:'todogxt', priority:'LOw', dueDate:'2020-03-24', done: false}, {id: 3, val:'todgext', priority:'LOw', dueDate:'2020-03-24', done: false}, {id: 4, val:'todoText', priority:'LOw', dueDate:'2020-03-24', done: false}]);

const [isDialogOpen, setIsDialogOpen] = useState(false);
const [isEditMode, setIsEditMode] = useState(false);
const [editTodo, setEditTodo] = useState({}); 
const [priorityFilter, setPriorityFilter] = useState(' ');

useEffect(() => {
  if(!isDialogOpen){
    if(isEditMode) setIsEditMode(false);

  }
})

useEffect(() => {
  if(isEditMode){
    formik.values.todoText = editTodo.val;
    formik.values.todoText = editTodo.priority;
    formik.values.todoText = editTodo.dueDate;
  }else{
    formik.values.todoText = ' ';
    formik.values.priority = 'Low ';
    formik.values.dueDate = getCurrentDate();

  }
},[isEditMode])
   
  
const handleDialogOpen = () =>{
  setIsDialogOpen(true);
}

const handleDialogClose = () =>{
  setIsDialogOpen(false);
  if(isEditMode) setIsEditMode(false);
}

const handleEditClick = (todo) => {
  setIsDialogOpen(true);
  setIsEditMode(true);
  setEditTodo(todo);
}

const handleSubmit =(e) => {
      const {todoText, priority,dueDate} = formik.values;
      if(!isEditMode){
        setTodos([...todos, {id: uuid(), val: todoText, priority: priority, dueDate: dueDate}]);
      }else{
        const newTodos = [...todos];
        const t=newTodos.find(t => t.id === editTodo.id);
        t.val = todoText;
        t.priority  = priority;
        t.dueDate = dueDate;
        setIsEditMode(false);
        setEditTodo({});
        setTodos(newTodos)
       }
     
      setIsDialogOpen(false);
      formik.values.todoText = ' ';
      formik.values.priority = 'Low ';
      formik.values.dueDate = getCurrentDate();
    }

const handleDelete = (id) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter(t=> t.id !== id))
}
  
const handlePriorityClick = (priority) =>{
  setPriorityFilter(priority)
}
const formik = useFormik({
      initialValues: {
        todoText: ' ',
        priority: 'Low',
        dueDate: getCurrentDate(),
      }
     
    });

  return (
    <>
      <CssBaseline/>
      <Container >
      <HeaderComponent
        handleFabClick={handleDialogOpen}
      />
      <TodoListComponent
        todos={todos}
        handleEditClick={handleEditClick}
        handleDelete={handleDelete}
        handleMarkDone={handleMarkDone}
        handlePriorityClick={handlePriorityClick}
      />

      </Container>
      <FormDialogComponent
      open={isDialogOpen}
      handleClose={handleDialogClose}
      handleSubmit={handleSubmit}
      formik={formik}
      isEditMode={isEditMode}
        
      />

      </>
    );
}

export default App;
