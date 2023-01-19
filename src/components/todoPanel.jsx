import "../css/todo.css"

const Todo = ({ text1, text2 ,imgsrc }) => {


    return (

        <div className="todoPanel">
            <div className="innerTodo" >
                <div >
                 <p>   {text1}</p>
                </div>
            </div>
            <div className="innerTodo" >
                <div >
                    <img src={imgsrc} alt="" />
                </div>
            </div>
            <div className="innerTodo" >
                <div >
                    <p>{text2}</p>
                </div>
            </div>
        </div>


    )

}


export default Todo;