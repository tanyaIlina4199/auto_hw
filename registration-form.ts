import Gender from "./gender";

export default class RegistrationForm {

    public firstname: string;
    public lastname: string;
    public phone?: string;
    public email?: string;
    public password: string; //число + спец + маленькая + большая + минимум 6 символов
    public confirmPassword: string;
    public birthDate: Date;
    public gender: Gender;

    // constructor(firstname: string, lastname: string, phone: string,
    //     email: string, password: string, confirmPassword: string, birthDate: Date, gender: Gender) {
    //     this.firstname = firstname;
    //     this.lastname = lastname;
    //     this.phone = phone;
    //     this.email = email;
    //     this.password = password;
    //     this.confirmPassword = confirmPassword;
    //     this.birthDate = birthDate;
    //     this.gender = gender;
    // }

    constructor() {}

    public register(firstname: string, lastname: string, phone: string,
        email: string, password: string, confirmPassword: string, birthDate: Date, gender: Gender): RegistrationForm {

            this.assertEmailOrPhone(phone, email);
            this.assertEmail(email);
            this.assertPhone(phone);
            this.assertDate(birthDate);
            this.assertFirstname(firstname, lastname);
            this.assertMatchPassword(password, confirmPassword);
            this.assertPassword(password);

            const finalForm = new RegistrationForm();
            finalForm.firstname = firstname;
            finalForm.lastname = lastname;
            finalForm.gender = gender;
            finalForm.email = email;
            finalForm.phone = phone;
            finalForm.password = password;
            finalForm.confirmPassword = confirmPassword;
            finalForm.birthDate = birthDate;

            return finalForm;
    }

    private assertEmailOrPhone(phone: string, email: string): void {
        if (phone == undefined && email == undefined) {
            throw new Error("You should fill phone or email");
        }
    }

    private assertMatchPassword(pass: string, confirmPassword: string): void {
        if (pass !== confirmPassword) {
            throw new Error("Password mismatch");
        }
    }

    private assertEmail(email: string): void {
        if (email !== undefined && email !== null) {
            const exp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

            if (!exp.test(email)) {
                throw new Error("Email is incorrect");
            }
        }
    }

    private assertFirstname(firstname: string, lastname: string): void {
        const exp: RegExp = /^[a-zA-Z ]+$/;

        const isCorrectFirstName = exp.test(firstname);
        const isCorrectLastName = exp.test(lastname);

        if (!isCorrectFirstName || !isCorrectLastName) {
            throw new Error("Firstname or Lastname is incorrent");
        }
    }
    
    private assertPhone(phone: string): void {
        if (phone !== undefined && phone !== null) {
            const exp: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

            if (!exp.test(phone)) {
                throw new Error("Phone is incorrect");
            }
        }
    }

    private assertDate(birthDate: Date): void {
        const now = Date.now();
        if (birthDate.valueOf() > now.valueOf()) {
            throw new Error("Birth date couldn't be greater than now");
        }
    }

    private assertPassword(pass: string) {
        const exp: RegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

        if (!exp.test(pass)) {
            throw new Error("Password is incorrect");
        }
    }

}

