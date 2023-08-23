import Gender from "./reg-form-data/gender";
import RegistrationForm from "./reg-form-data/registration-form";

const f = "Her";
const l = "Ger";
const g = Gender.FEMALE;
const b = new Date('1995-10-10');
const email = "sdogdfjkg"//"dksjfhs@ghgk.com"
const p = "Jk523457!"
const cp = "Jk523457!"

const reg = new RegistrationForm().register(f, l, null, email, p, cp, b, g);

console.log(reg);