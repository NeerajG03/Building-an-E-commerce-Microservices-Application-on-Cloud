export const signup = async (userData) => {
  try {
    const result = await fetch("http://localhost:8001/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.status === 200) {
      console.log("Success:", result);
      return true;
    } else {
      console.log("Error in Node JS, Code : ", result.status);
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const login = async (userData) => {
  try {
    const result = await fetch("http://localhost:8001/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.status === 200) {
      console.log("Success:", result);
      return true;
    } else {
      console.log("Error in Node JS, Code : ", result.status);
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
