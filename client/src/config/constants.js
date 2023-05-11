export const URL_SERVER =
  proccess.env.NODE_ENV == "production"
    ? "pamboo-challenge-production.up.railway.app"
    : "localhost:8080/";
