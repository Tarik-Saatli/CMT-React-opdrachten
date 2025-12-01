
const CreateTodo = ({textInput, setTextInput, todo, setTodo}) => {

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

const submitTodoHandler = (e) => {
    e.preventDefault();

    setTodo([...todo, textInput])
    setTextInput('');
};

    return (
        <form action="">
            <textarea className="bg-white" value={textInput} cols="50" rows="5" onChange={userInputHandler}></textarea>
            <button onClick={submitTodoHandler}>Toevoegen</button>
        </form>
    );
};

export default CreateTodo;