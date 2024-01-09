<script>
  
  let todos = [];
  let newTodo = '';

  function addTodo() {
    if (newTodo.trim() !== '') {
      todos = [...todos, newTodo];
      newTodo = '';
    }
  }
  function removeTodo(index) {
    todos = todos.filter((_, i) => i !== index);
  }
</script>

<style>
  nav {
    background-color: #3498db;
    color: white;
    padding: 1em;
    text-align: center;
  }
  nav button {
    background-color: #2980b9;
    color: white;
    border: none;
    padding: 0.5em 1em;
    margin: 0 1em;
    cursor: pointer;
  }
  main {
    max-width: 600px;
    margin: 2em auto;
    padding: 1em;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0.5em 0;
  }

  button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
  }

</style>

<main>
   <nav>
    <button>Header Button</button>
    <button on:click={() => goto('/login')}>Logout</button>
  </nav>

  <h1>Todo App</h1>
  <form on:submit|preventDefault={addTodo}>
    <label for="todoInput">New Todo:</label>
    <input bind:value={newTodo} type="text" id="todoInput" required />
    <button type="submit">Add Todo</button>
  </form>

  <ul>
    {#each todos as todo, index (todo)}
      <li>
        {todo}
        <button on:click={() => removeTodo(index)}>Remove</button>
      </li>
    {/each}
  </ul>
</main>