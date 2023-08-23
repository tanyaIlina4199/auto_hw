import assert from "assert";
import RegistrationForm from "../registration-form";
import Gender from "../gender";

interface TestCase {
    testcaseName: string;
    firstname: string;
    lastname: string;
    birthDate: Date;
    gender: Gender;
    phone?: string;
    email?: string;
    password: string;
    confirmPassword: string;
}

const testCases: TestCase[] = [
    {
        testcaseName: "Password match with email",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
    {
        testcaseName: "Password match with phone",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    }
]

describe("Positive tests", function () {
    testCases.forEach(function (testCase) {
        it(testCase.testcaseName, function () {
            const actualRegForm = new RegistrationForm().register(testCase.firstname, testCase.lastname, testCase.phone,
                testCase.email, testCase.password, testCase.confirmPassword, testCase.birthDate, testCase.gender);

            //console.log(actualRegForm);

            const expectedRegForm = new RegistrationForm();
            expectedRegForm.firstname = testCase.firstname;
            expectedRegForm.lastname = testCase.lastname;
            expectedRegForm.gender = Gender.MALE;
            expectedRegForm.email = testCase.email;
            expectedRegForm.phone = testCase.phone;
            expectedRegForm.password = testCase.password;
            expectedRegForm.confirmPassword = testCase.confirmPassword;
            expectedRegForm.birthDate = testCase.birthDate;

            //console.log(expectedRegForm);

            assert.deepEqual(actualRegForm, expectedRegForm);
        })
    })
})