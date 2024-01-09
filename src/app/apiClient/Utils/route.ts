const BASE_URL = process.env.BACKEND_URL as string;

export async function Auth(email: string, password: string) {
  const response = await fetch(BASE_URL + "api/auth/login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  return data;
}

export async function GetUser(userId: string, token: string) {
  let user = null;

  await fetch(BASE_URL + "api/user/" + userId, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response) => {
    user = response.json();

    return user;
  });

  return user;
}
