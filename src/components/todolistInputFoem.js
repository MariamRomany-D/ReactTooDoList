// only form component (stateless component)
import React from "react";
import "./components.css";


{/* the way to (props) in function compunent */}
const TodoForm = (props) => {

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 addItem">
                    <form onSubmit={props.addList}>
                        <input className="inp" type="text" value={props.current} onChange={props.catchInputValue} placeholder="Add New Item" />
                        <button className="sub" type="Submit">+</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
     );
}
 
export default TodoForm;