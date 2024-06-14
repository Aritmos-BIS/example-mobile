async function authService(email, password ) {
  console.log({ email, password });

  try {
    const response = await fetch('http://10.100.0.149:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if(!response.ok){
      await response.json();
      throw new Error(response.message);
    }
  
    return response.json();
  } catch (error) {
    alert("Error in login")

    return undefined;
  }
}

export default authService;
