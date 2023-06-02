export default function handler(request, response) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    env: process.env.DB_HOST,
    env: process.env.REACT_APP_BASE_URL,
    env: process.env.CLIENT_URL,
  });
}
