import { AntaresData } from "../models/Antares";

async function Antares() {

      
    const data: AntaresData = await fetch("http://ec2-3-82-213-87.compute-1.amazonaws.com/data", {
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