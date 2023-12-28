export default async function getUser(userId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!response.ok) {
    // throw new Error('Failed to fetch data');
    return null;
  }

  return response.json();
}
