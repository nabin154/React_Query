import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

const addTodo = async (newTodo) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

const AddTodos = () => {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('');

    const { mutate, isError, error, isSuccess } = useMutation({
        mutationFn: addTodo,
        onSuccess: (data) => {
            console.log('Todo added successfully!!', data);
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: (error) => {
            console.error('Error adding todo', error);
        },
        onSettled: () => {
            setTitle(''); 
        },
    });

    const handleTodo = () => {
        if (title.trim()) {
            mutate({ title: title, completed: false });
        } else {
            console.error('Title cannot be empty');
        }
    };

    return (
        <div style={{ marginTop: '50px' }}>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ height: '30px', borderRadius: '5px' }}
                    type="text"
                    placeholder="Enter the title"
                />
                <button onClick={handleTodo} style={{ height: '30px', padding: '6px', marginLeft: '5px' }}>
                    Add todo
                </button>
            </div>
            {isError && <div>Error: {error.message}</div>}
            {isSuccess && <div>Todo added successfully!</div>}
        </div>
    );
};

export default AddTodos;
