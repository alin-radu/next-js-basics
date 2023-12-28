export default async function getUser(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
