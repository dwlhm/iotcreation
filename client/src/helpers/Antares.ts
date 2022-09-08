import { AntaresData } from "../models/Antares";

async function Antares() {

      
    const data: AntaresData = await fetch("http://localhost:3001/data", {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => result)
        .catch(error =>  {
            return {
                message: "error",
                body: [],
                error: error.toString().replace("TypeError: ", "")
            }
        });

    const result = {
        message: data.message,
        body: data.message !== "error" ? data.body.split(":") : [],
        error: data.error
    }
    
    return result
}

export default Antares