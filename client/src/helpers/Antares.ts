import { AntaresData } from "../models/Antares";

async function Antares() {

      
    const data: AntaresData = await fetch("https://jovial-platypus-1c34d5.netlify.app/api/antares", {
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

        console.log(data)

    const result = {
        message: data.message,
        body: data.message !== "error" ? data.data.split(":") : [],
        error: data.error
    }
    
    return result
}

export default Antares