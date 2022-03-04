import axios, { Axios, AxiosError } from "axios";

async function postRequest() {
  try {
    // const response = await axios.get("http://127.0.0.1:3000/api/test");
    // console.log(response.data);
    const body = {
      name: "chhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      amount: 22,
    };
    const response = await axios.post("http://127.0.0.1:3000/api/examples", {
      ...body,
    });
    console.log(response.data);
  } catch (error: any) {
    console.log(error.response.data);
  }
}

setTimeout(() => {
  postRequestSync();
}, 1000);

function postRequestSync() {
  postRequest();
}
