import { json } from '@sveltejs/kit/http';

let todos = [];

export const post = async (request) => {
  try {
    
    const data = await json(request);

    todos.push(data);

    return {
      status: 200,
      body: { todos },
    };
  } catch (error) {
    console.error('Error adding todo:', error);
    return {
      status: 500,
      body: { error: 'Internal Server Error' },
    };
  }
};

export const get = async () => {
  try {
    return {
      status: 200,
      body: { todos },
    };
  } catch (error) {
    
    console.error('Error fetching todos:', error);
    return {
      status: 500,
      body: { error: 'Internal Server Error' },
    };
  }
};
