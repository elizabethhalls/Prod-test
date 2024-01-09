
<script>
  let username = '';
  let password = '';
  let email = '';

  const handleSignup = async () => {
    console.log('Signup data:', { username, password, email });
  };
</script>

<main>
  <h1>Signup</h1>

  <form on:submit|preventDefault={handleSignup}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />

    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required />

    <button type="submit">Sign Up</button>
  </form>
</main>
