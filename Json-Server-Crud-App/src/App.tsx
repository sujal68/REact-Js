import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="App">
      <h1 className='text-4xl'>Json Server Crud App</h1>
      <Outlet />
    </div>
  )
}