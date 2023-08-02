export default class Calculator {

    public arguments: Arguments;
    public operation: Operation;
    constructor(args: Arguments, operation: Operation) {
        this.arguments = args;
        this.operation = operation;
    }

    public calc(): number {
        let result: number = 0;
        switch(this.operation) {
            case Operation.ADDITION:
                result = this.add(this.arguments);
                break;
            case Operation.SUBTRACTION:
                result = this.substr(this.arguments);
                break;
            case Operation.MULTIPLICATION:
                result = this.mult(this.arguments);
                break;
            case Operation.DIVISION:
                result = this.div(this.arguments);
                break;
            case Operation.EXPONENTIATION:
                result = this.exp(this.arguments);
                break;
        }

        return result;
    }

    private add(args: Arguments): number {
        const first = args.firstDigit;
        const second = args.secondDigit;

        return first + second;
    }

    private substr(args: Arguments): number {
        const first = args.firstDigit;
        const second = args.secondDigit;

        return first - second;
    } 

    private mult(args: Arguments): number {
        const first = args.firstDigit;
        const second = args.secondDigit;

        return first * second;
    } 

    private div(args: Arguments): number {
        const first = args.firstDigit;
        const second = args.secondDigit;

        return first / second;
    } 

    private exp(args: Arguments): number {
        const first = args.firstDigit;
        const second = args.secondDigit;

        return Math.pow(first, second);
    } 

}

export class Arguments {
    public firstDigit: number;
    public secondDigit: number;
    constructor(firstDigit: number, secondDigit: number) {
        this.firstDigit = firstDigit;
        this.secondDigit = secondDigit;
    }
}

export enum Operation {
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION,
    EXPONENTIATION
}