interface User {
   id: number,
   name: string
}
const UserPage= async()=>{
   const res = await fetch("https://jsonplaceholder.typicode.com/users")
   const users: User[] = await res.json()
   return(<div >
      <h1>fetch users data </h1>
      {
         users.map((user)=><li key={user.id}>{user.name}</li>)
      }
   </div>
)}
export default UserPage;