const user = {
  name: "John Doe",
  age: 30,
  email: "jeshu@example.com"
}

export default function App() {
  return (
    <>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </>
  )
}