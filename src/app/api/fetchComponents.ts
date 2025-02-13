import axios from "axios";

const BASE_URL = "http://3.111.196.92:8020/api/v1";
const AUTH = { username: "trial", password: "assignment123" };

async function fetchComponentData(endpoint: string) {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, { auth: AUTH});
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

export async function fetchComponent1() {
  return fetchComponentData("/sample_assignment_api_1/");
}

export async function fetchComponent3() {
  return fetchComponentData("/sample_assignment_api_3/");
}

export async function fetchComponent4() {
  return fetchComponentData("/sample_assignment_api_4/");
}

export async function fetchComponent5() {
  return fetchComponentData("/sample_assignment_api_5/");
}