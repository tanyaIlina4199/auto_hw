import { expect } from "chai";
import HttpClient from "../api-tests-data/httpclient";
import { TestData } from "../api-tests-data/testdata";

describe("API testing of get requests", () => {
    test("GET testing", async () => {

        const response = await HttpClient.get("users");
        expect(response.statusCode).to.equal(200);
        
    })


    test("GET testing of users list", async () => {

        const response = await HttpClient.get("users");
        const size = response.body.length;
        expect(size).to.equal(10);
    })


})

describe("API testing of post requests", () => {
    test("Create new user", async () => {

        const body: object = JSON.parse(TestData.requestBody);
        const response = await HttpClient.post("users", body);
        console.log(response.statusCode);
        expect(response.statusCode).to.equal(201);
    })
})

describe("API testing of put requests", () => {
    test("Update user with id = 1", async () => {

        const body: object = JSON.parse(TestData.requestBody);
        const response = await HttpClient.put("users/1", body);
        const email = response.body.email;
        console.log(email);
        expect(email).to.equal("bob@april.bees");
    })
})

describe("API testing of delete requests", () => {
    test("Delete user with id = 1", async () => {

        const response = await HttpClient.delete("users/1");
        expect(response.statusCode).to.equal(200);
    })
})