import { rest } from "msw";
import { setupServer } from "msw/node";
export const BASE_URL = "https://randomuser.me/api";

export const handlers = [
  rest.get("https://randomuser.me/api", (req, res, ctx) => {
    console.log(req.params);
    return res(fakePacientsfromAPI);
  }),
];

export const server = setupServer(...handlers);
