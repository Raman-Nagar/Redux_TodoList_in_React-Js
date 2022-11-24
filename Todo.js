import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";

function Todo() {
    const [inpData, setInpData] = useState();
    const [show, setShow] = useState("");
    const [clr, setClr] = useState("");

    const list = useSelector((state) => state.TodoReducer.list)
    const dispatch = useDispatch()
    return (<>
        <div className='container'>
            <div>
                <h1>Add your list here</h1>
                <div className="row border">
                    <input type="text" placeholder='add item' value={inpData} onChange={(e) => setInpData(e.target.value)} className="form-control col" />
                    <button className="btn btn-secondary" onClick={() => dispatch(addTodo(inpData), setInpData(""), setShow('remove all'), setClr("btn-danger"))} >+</button>
                </div>
                <div>
                    {list.map((x) => {
                        return (
                            <div key={x.id} className='row border'>
                                <h2 className="col">{x.data}</h2>
                                <button className="btn btn-warning" onClick={() => dispatch(deleteTodo(x.id))} >x</button>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <button className={`btn ${clr}`} onClick={() => dispatch(removeTodo(), setShow(''), setClr(""))}>{show}</button>
                </div>
            </div>
        </div>
    </>)
}
export default Todo;