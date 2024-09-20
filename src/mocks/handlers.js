import { rest } from "msw";

const baseURL = "https://moments-app-api-f55e67a631c8.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 5,
            "username": "normaluser1",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 5,
            "profile_image": "https://res.cloudinary.com/dh8enl0ob/image/upload/v1/media/images/favicon-16x16_qm9sx9"
            }))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
      }),
]