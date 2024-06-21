import Cookies from 'js-cookie';

export const checkUser = async()=>{
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const response = await fetch(`${apiURL}/owner/auth`,{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    credentials: 'include'
  });
  const data = await response.json();
  if (response.status == 401) {return false;}
  else if (data.user === true) {return true;};
}

