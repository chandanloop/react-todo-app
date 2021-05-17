import React from "react";

const ToDoLists = (props) => {


    return( 
    <>
    <div className="todo_style">
    <i className="fab fa-accessible-icon"
        onClick = {() => {
            props.onSelect(props.id);

        }}>
    </i>
    <li> {props.text} </li>
    </div>
    </>
    );
};

export default ToDoLists; 
//fab fa-accessible-icon