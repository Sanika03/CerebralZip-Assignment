export default async function handler(req, res) {
    const response = await fetch("http://3.111.196.92:8020/api/v1/login/", {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(req.body),
    });
  
    const data = await response.json();
    res.status(response.status).json(data);
  }
  