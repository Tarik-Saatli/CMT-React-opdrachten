import Todo from "./Todo";

const TodoList = ({ name, todo }) => {
    return (
        <>
            {todo.map((m) => (
                <Todo name={name} todo={m
                } />
            ))}



        </>
    );
}

export default TodoList;