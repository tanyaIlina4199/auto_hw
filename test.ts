import Calculator, { Arguments, Operation } from "./calculator";

export default class CalculatorTest {

    static checkSubstractionPositive(): string {
        const args = new Arguments(10, 2);
        const oper = Operation.SUBTRACTION;

        const calc = new Calculator(args, oper);
        const actualResult = calc.calc();
        const expectedResult: number = 8;
        let isResultAsExpected = actualResult === expectedResult;
        return "Test is passed: " + isResultAsExpected;
    }
}