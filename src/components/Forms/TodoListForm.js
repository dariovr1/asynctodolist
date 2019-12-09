import { connect } from 'react-redux';
import { addTodo } from '../../actions/todolist';

import React,{useState, useEffect} from 'react';

const mapDispatchToProps = dispatch => {
    return {
      onAddTodo: todo => {
        dispatch(addTodo(todo));
      }
    };
  };

const TodoListForm = (props) => {

    const [title , setTitle] = useState("");

    const handleSubmit = (e) => {
        
        e.preventDefault();

        props.onAddTodo({
            title
        })
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        if (name === "title") {
            setTitle(value);
        }
    }

    useEffect( () => {
        console.log("hi from CDidMount");
    },[])

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" value={title} onChange={handleChange} />
            <button>addTodoList</button>
        </form>
        </>
    )
}

export default connect(
    null,
    mapDispatchToProps
  )(TodoListForm);

