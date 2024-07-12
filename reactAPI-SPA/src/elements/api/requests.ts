export default async function LoginRequest(username: string, password: string) {
  try {
    console.log(username, password);
    
    let rawdata = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    if (!rawdata.ok) {
      throw new Error(`HTTP error! status: ${rawdata.status}`);
    }

    let data = await rawdata.json();
    return data;

  } catch (error) {

    // Handle the error appropriately, e.g., by returning a specific error message or rethrowing the error
    return false;
  }
}

//export LoginRequest;



export async function getDefaultCars() {
  let rawdata = await fetch('https://freetestapi.com/api/v1/cars', {
    method: 'GET'
  });

  let data = await rawdata.json();
    return data;

}


export async function getImages(make:string,model:string)
{

  const client_id:string = "lhBukqWLDLj-rByUJDqtE0K_Tt1N_n3rGd4WqfxDXUo";

  let rawdata = await fetch(`https://api.unsplash.com/search/photos?query=${make}+${model}&client_id=${client_id}`, {
    method: 'GET'
  });

  let data = await rawdata.json();
  return data.results[0]?.urls?.regular;

  
}

//export  getDefaultCars;