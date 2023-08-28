import assert from "assert";
import RegistrationForm from "../reg-form-data/registration-form";
import Gender from "../reg-form-data/gender";

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
    expectedResult?: string;
}

const positiveTestCases: TestCase[] = [
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
    },
    {
        testcaseName: "Gender - FEMALE",
        firstname: "Ann",
        lastname: "Pstinston",
        birthDate: new Date('2000-05-01'),
        gender: Gender.FEMALE,
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
    {
        testcaseName: "Gender - CUSTOM",
        firstname: "Ann",
        lastname: "Pstinston",
        birthDate: new Date('2000-05-01'),
        gender: Gender.CUSTOM,
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
    {
        testcaseName: "Lastname input length check - MIN",
        firstname: "Ann",
        lastname: "Q",
        birthDate: new Date('2000-05-01'),
        gender: Gender.FEMALE,
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
     {
        testcaseName: "Lastname input length check - MAX",
        firstname: "Ann",
        lastname: "Wolfschlegelsteinhausenbergedo",
        birthDate: new Date('2000-05-01'),
        gender: Gender.FEMALE,
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
    {
        testcaseName: 'Name with "-" ',
        firstname: "Ann-Marri",
        lastname: "Kot",
        birthDate: new Date('2000-05-01'),
        gender: Gender.FEMALE,
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
       {
        testcaseName: "Password input length check - MIN",
        firstname: "Ann",
        lastname: "Pstinston",
        birthDate: new Date('2000-05-01'),
        gender: Gender.FEMALE,
        phone: "1234567890",
        password: "Vn9sh!",
        confirmPassword: "Vn9sh!"
    },
     {
        testcaseName: "Password input length check - MAX",
        firstname: "Ann",
        lastname: "Pstinston",
        birthDate: new Date('2000-05-01'),
        gender: Gender.FEMALE,
        phone: "1234567890",
        password: "Vkusn9shka!1111111111111111111",
        confirmPassword: "Vkusn9shka!1111111111111111111"
    },
    {
        testcaseName: "Uppercase name",
        firstname: "MICHAEL",
        lastname: "Caine",
        birthDate: new Date('1933-03-14'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Lol9shka!",
        confirmPassword: "Lol9shka!"
    },
    {
        testcaseName: "Uppercase lastname",
        firstname: "Matt",
        lastname: "DAMON",
        birthDate: new Date('1970-08-10'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn5shka?",
        confirmPassword: "Vkusn5shka?"
    },
    {
        testcaseName: "Name with space",
        firstname: "Bob ",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
    {
        testcaseName: "With email and phone",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
    {
        testcaseName: "Email has two top level domains",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob.co",
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    },
    {
        testcaseName: "Email has three top level domains",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob.co.uk",
        phone: "1234567890",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!"
    }
]

const negativeTestCases: TestCase[] = [
    {
        testcaseName: "Password mismatch",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusy9shka!",
        expectedResult: "Password mismatch"
    },
    {
        testcaseName: "Invalid symbols in name",
        firstname: "Bob7",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusy9shka!",
        expectedResult: "Firstname or Lastname is incorrent" 
    },
    {
        testcaseName: "Invalid symbols in last name",
        firstname: "Bob",
        lastname: "Pstinston7",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusy9shka!",
        expectedResult: "Firstname or Lastname is incorrent" 
    },
    {
        testcaseName: "Required field is empty - firstname",
        firstname: "",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusy9shka!",
        expectedResult: "Firstname or Lastname is incorrent" 
    },
    {
        testcaseName: "Required field is empty - lastname",
        firstname: "Bob",
        lastname: "",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusy9shka!",
        expectedResult: "Firstname or Lastname is incorrent" 
    },
    // {
    //     testcaseName: "Incorrect date format",
    //     firstname: "Bob",
    //     lastname: "Pstinston",
    //     birthDate: new Date('2021-02-31'),
    //     gender: Gender.MALE,
    //     email: "bobbobok@bob.bob",
    //     password: "Vkusn9shka!",
    //     confirmPassword: "Vkusn9shka!",
    //     expectedResult: "?" 
    // },
    {
        testcaseName: "Incorrect date format with 0",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-00-31'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!",
        expectedResult: "Invalid Date"  
    },
    {
        testcaseName: "Incorrect date format, more than present",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2025-01-31'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!",
        expectedResult: "Birth date couldn't be greater than now"  
    },
    {
        testcaseName: "Letters in the date",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2000-аа-31'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusy9shka!",
        expectedResult: "Invalid Date"  
    },
    {
        testcaseName: "No gender selected",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2000-01-31'),
        gender: null,
        email: "bobbobok@bob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!",
        expectedResult: "You should fill gender"  
    },
    {
        testcaseName: "Zero in phone number",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        phone: "0",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!",
        expectedResult: "Phone is incorrect" 
    },
    {
        testcaseName: "Invalid email format, without @",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobokbob.bob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!",
        expectedResult: "Email is incorrect"
    },
    {
        testcaseName: "Invalid email format, without domain",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bobbob",
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!",
        expectedResult: "Email is incorrect" 
    },
    {
        testcaseName: "No phone and email",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        password: "Vkusn9shka!",
        confirmPassword: "Vkusn9shka!",
        expectedResult: "You should fill phone or email"
    },
    {
        testcaseName: "Invalid password format, no capital letter",
        firstname: "Bob",
        lastname: "Pstinston",
        birthDate: new Date('2021-04-01'),
        gender: Gender.MALE,
        email: "bobbobok@bob.bob",
        password: "vkusn9shka!",
        confirmPassword: "vkusn9shka!",
        expectedResult: "Password is incorrect" 
    }
]

describe("Positive cases", () => {
    positiveTestCases.forEach(function (testCase) {
        it(testCase.testcaseName, function () {
            const actualRegForm = new RegistrationForm().register(testCase.firstname, testCase.lastname, testCase.phone,
                testCase.email, testCase.password, testCase.confirmPassword, testCase.birthDate, testCase.gender);

            //console.log(actualRegForm);

            const expectedRegForm = new RegistrationForm();
            expectedRegForm.firstname = testCase.firstname;
            expectedRegForm.lastname = testCase.lastname;
            expectedRegForm.gender = testCase.gender;
            expectedRegForm.email = testCase.email;
            expectedRegForm.phone = testCase.phone;
            expectedRegForm.password = testCase.password;
            expectedRegForm.confirmPassword = testCase.confirmPassword;
            expectedRegForm.birthDate = testCase.birthDate;

            //console.log(expectedRegForm);

            assert.deepEqual(actualRegForm, expectedRegForm);
        })
    })
});

describe("Negative cases", function () {
    negativeTestCases.forEach(function (testCase) {
        it(testCase.testcaseName, function () {

            let result = "";
            try {
            const actualRegForm = new RegistrationForm().register(testCase.firstname, testCase.lastname, testCase.phone,
                testCase.email, testCase.password, testCase.confirmPassword, testCase.birthDate, testCase.gender);

                console.log(actualRegForm.birthDate)

                result = "Succesful registration";
            } catch (error) {
                result = error.message;
            }

            console.log(result);

            assert.deepEqual(result, testCase.expectedResult);
        })
    })
})