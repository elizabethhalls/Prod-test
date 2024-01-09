import { redirect } from '@sveltejs/kit';

export const post = async ({ request, resolve }) => {
  const formData = new URLSearchParams(await request.text());
  const username = formData.get('username');
  const password = formData.get('password');

  
  if (username === 'bob' && password === 'bobpass') {
    
    return {
      status: 303,
      headers: {
        'set-cookie': 'logged_in=true; Path=/',
        location: '/',
      },
    };
  }
  return {
    status: 401,
    body: 'Invalid username or password',
  };
};