const App = require("../../App");

const request = require("supertest");

const agent = request.agent(App);

describe("GET /main", () => {
  test("Should return status 200 if home page works", async () => {
    await agent.get("/main").expect(200);
  });
});

//create user
describe("POST /createuser", () => {
  test("Should return status 201 if user created", async () => {
    await agent.post("/createuser").send({ username: "ivan", password: "mypassword"}).expect(201);
  });
});

//test first programming
it("Should return status 200 if Ivan page works", async () => {
  await agent.get("/ivan").expect(200);
});
