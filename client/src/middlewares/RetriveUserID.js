import Cookies from 'js-cookie';

export const retriveUserID = async()=>{
    const apiURL = import.meta.env.VITE_API_BASE_URL;
    try
    {
        const response = await fetch(`${apiURL}/owner/auth`,{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            credentials: 'include'
          });
          const data = await response.json();
          return data._id;
    }
    catch(error)
    {
        return error;
    }
  }