import { ICourse } from "./interfases.def";

export default async function getData(api: string) {
  const response = await fetch(`http://localhost:3000/${api}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
    },
  });
  const respData = await response.json();
  return respData;
}

export async function deleteData(api: string) {
  const response = await fetch(`http://localhost:3000/${api}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
    },
  });
  if (response.ok) {
    return true;
  } else {
    return false;
  }
}

export async function createCourse(api: string, data: ICourse) {
  const response = await fetch(`http://localhost:3000/${api}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
    },
    body: JSON.stringify(data),
  });
  const respData = await response.json();
  if (respData?._id) {
    return true;
  }
  return false;
}

export async function editCourse(api: string, data: ICourse) {
  const response = await fetch(`http://localhost:3000/${api}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
    },
    body: JSON.stringify(data),
  });
  const respData = await response.json();
  if (respData?._id) {
    return true;
  }
  return false;
}
