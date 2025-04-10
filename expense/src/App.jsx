import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from './Category'
import { useTrackContext } from './Context/ContextApi'
import Table from './Table'
import Navbar from './components/Navbar'
import ShowExpense from './components/ShowExpense'

function App() {

  const [user,setUser]= useState(null);
  const [expenses,setExpenses]=useState();
 // calll the get function so that it checks for whether the user is logged in or not if logged in gives details;
 useEffect(() => {
   const fetchUser = async () => {
     try {
       const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/`, {
         method: "GET",
         credentials: "include", // Ensure cookies are sent with the request
       });

       const data = await response.json(); // Properly parse the JSON
       setUser(data.user);
       console.log(data.expenses);
       setExpenses(data.expenses);
       // Set user state
      
  
     } catch (error) {
       console.log("Error fetching user:", error);
     }
   };

   fetchUser(); // Call the function
 }, []); 

  return (
    <>
        <div>
          <Navbar detail={user}/>
        </div>

        {expenses?<div>
          <ShowExpense expenses={expenses}/>
        </div>:<div>
          There are No expenses to Show Right Now 
        </div>}
    </>
  )
}

export default App
