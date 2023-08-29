import { expect, test, describe } from "@jest/globals";
import HttpClient from "../api-tests-data/httpclient";
import { TestData } from "../api-tests-data/testdata";

describe("API testing of GET requests", () => {
    test("GET testing", async () => {

        const response = await HttpClient.get("users");
        expect(response.statusCode).toEqual(200);
        
    })

    test("GET testing of users list", async () => {

        const response = await HttpClient.get("users");
        const size = response.body.length;
        expect(size).toEqual(10);
    })

    test("GET testing of email for user 1", async () => {

        const response = await HttpClient.get("users/1");
        const email = response.body.email;
        expect(email).toEqual("Sincere@april.biz");
    })

    test("GET testing of phone for user 2", async () => {

        const response = await HttpClient.get("users/2");
        const phone = response.body.phone;
        expect(phone).toEqual("010-692-6593 x09125");
    })

    test("GET testing of name for comment 4", async () => {

        const response = await HttpClient.get("comments/4");
        const name = response.body.name;
        expect(name).toEqual("alias odio sit");
    })
})

describe("API testing of POST requests", () => {
    test("Create new user", async () => {

        const body: object = JSON.parse(TestData.requestBodyUser);
        const response = await HttpClient.post("users", body);
        expect(response.statusCode).toEqual(201);
    })

    test("Check email for new user", async () => {

        const body: object = JSON.parse(TestData.requestBodyUser);
        const response = await HttpClient.post("users", body);
        expect(response.body.email).toEqual("bob@april.bees");
    })

    test("Check name for new comment", async () => {

        const body: object = JSON.parse(TestData.requestBodyComment);
        const response = await HttpClient.post("comments", body);
        expect(response.body.name).toEqual("test comment");
    })

    test("Check id for new photo", async () => {

        const body: object = JSON.parse(TestData.requestBodyPhoto);
        const response = await HttpClient.post("photos", body);
        expect(response.body.id).toEqual(5001);
    })

    test("Check id for new todo", async () => {

        const body: object = JSON.parse(TestData.requestBodyTodo);
        const response = await HttpClient.post("todos", body);
        expect(response.body.completed).toEqual(true);
    })
})

describe("API testing of PUT requests", () => {
    test("Update user with id = 1", async () => {

        const body: object = JSON.parse(TestData.requestBodyUser);
        const response = await HttpClient.put("users/1", body);
        const email = response.body.email;
        expect(email).toEqual("bob@april.bees");
    })

    test("Update user with id = 3", async () => {

        const body: object = JSON.parse(TestData.requestBodyUser);
        const response = await HttpClient.put("users/3", body);
        expect(response.statusCode).toEqual(200);
    })

    test("Update todo with id = 2", async () => {

        const body: object = JSON.parse(TestData.requestBodyTodo);
        const response = await HttpClient.put("todos/2", body);
        expect(response.body.id).toEqual(2);
        expect(response.body.title).toEqual("write api testing");
    })

    test("Update photo with id = 1000", async () => {

        const body: object = JSON.parse(TestData.requestBodyPhoto);
        const response = await HttpClient.put("photos/1000", body);
        expect(response.body.id).toEqual(1000);
        expect(response.body.url).toEqual("https://via.placeholder.com/600/777888");
    })

    test("Update comment with id = 337", async () => {

        const body: object = JSON.parse(TestData.requestBodyComment);
        const response = await HttpClient.put("comments/337", body);
        expect(response.body.id).toEqual(337);
    })
})

describe("API testing of DELETE requests", () => {
    test("Delete user with id = 1", async () => {

        const response = await HttpClient.delete("users/1");
        expect(response.statusCode).toEqual(200);
    })

    test("Delete user with id = 2", async () => {

        const response = await HttpClient.delete("users/2");
        const empty: any = {};
        expect(response.body).toEqual(empty);
    })

    test("Delete photo with id = 3", async () => {

        const response = await HttpClient.delete("photos/3");
        const empty: any = {};
        expect(response.body).toEqual(empty);
    })

    test("Delete todo with id = 1", async () => {

        const response = await HttpClient.delete("todos/1");
        expect(response.statusCode).toEqual(200);
    })

    test("Delete albums with id = 99", async () => {

        const response = await HttpClient.delete("albums/99");
        expect(response.statusCode).toEqual(200);
    })
})