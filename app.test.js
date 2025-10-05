const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Hello, SDL CI Project!");
  });
});

describe("POST /echo", () => {
  it("should return echoed message", async () => {
    const res = await request(app)
      .post("/echo")
      .send({ message: "Hello CID!" })
      .set("Accept", "application/json");

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("echoed", "Hello CI!");
  });

  it("should return 400 if message is missing", async () => {
    const res = await request(app)
      .post("/echo")
      .send({})
      .set("Accept", "application/json");

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error", "Message is required");
  });
});
