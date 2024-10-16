interface User {
   id: number,
   name: string
}
const UserPage= async()=>{
   const res = await fetch("https://jsonplaceholder.typicode.com/users")
   const users: User[] = await res.json()
   return(<div >
      <h1>Users </h1>
      {
         users.map((user)=>user.name)
      }
   </div>
)}
export default UserPage;