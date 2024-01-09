<script>

  import Todo from './routes/todo/index.svelte';
  let username = '';
  let password = '';
  let isAuthenticated = false;

  const handleLogin = async () => {
    if (username === 'bob' && password === 'bobpass') {
      isAuthenticated = true;
      throw {
        redirect: '/todo',
      };
    } else {
      return {
        status: 401,
        body: {
          message: 'Invalid username or password',
        },
      };
    }
  };
</script>

<main>
  <nav>
    <h1 style="color: white;">Login</h1>
    <a href="/signup" style="color: white;">Signup</a>
  </nav>

  <h1>Welcome</h1>

  {#if isAuthenticated}
    
    <p>Redirecting...</p>
  {:else}
    <form on:submit|preventDefault={handleLogin}>
      <label for="username">Username:</label>
      <input type="text" id="username" bind:value={username} placeholder="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} placeholder="password" required />

      <button type="submit">Log In</button>
    </form>
  {/if}
</main>

<style>
  nav {
    background-color: #3498db;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    max-width: 400px;
    margin: 2em auto;
  }
 
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    margin-bottom: 0.5em;
    color: white;
  }

  input {
    padding: 0.5em;
    margin-bottom: 1em;
  }

  button {
    padding: 0.5em 1em;
    background-color: #3498db;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
</style>


