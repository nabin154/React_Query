import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

function Todos() {
    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Todos</h1>
            {isFetching && <div>Fetching new data...</div>}
            <ul>
                {data.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;