import { useState } from "react"

function Authenticate({token}){     
    const[successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)

    async function handleClick(){ 
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", 
            {
            method: 'GET',
            headers: { 
                'Content-type': 'application/json', 
                Authorization: `Bearer ${token}`,
            
            } 
            
        }
         
        )
        const result = await response.json()
        setSuccessMessage(result.message)
       

                //
        }catch(error){
            setError (error.message)
        }  
      }

    return(  
        <> 
    <h2 className="auth"> Authenticate</h2> 
    {successMessage && <p>{successMessage} </p>}
    <button className="btn2" onClick={handleClick}>Authenticate Token</button>
    </>
    )
}

export default Authenticate 