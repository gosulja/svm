const PUSH = "PUSH";
const ADD = "ADD";
const MINUS = "MINUS";

function virtualMachine(program) {
    let counter = 0;
    let stack = [];
    let sPointer = 0;

    let right, left;

    while (counter < program.length) {
        let instruction = program[counter];

        switch (instruction) {
            case PUSH:
                stack[sPointer] = program[counter + 1];
                sPointer++;
                counter++;
                break;

            case ADD:
                right = stack[sPointer - 1];
                sPointer--;
                left = stack[sPointer - 1];
                sPointer--;

                stack[sPointer] = left + right;
                sPointer++;

                break;
        
            case MINUS:
                right = stack[sPointer - 1];
                sPointer--;
                left = stack[sPointer - 1];
                sPointer--;

                stack[sPointer] = left - right;
                sPointer++;

                break;
        }

        counter++;
    }

    console.log(`Stacktop: ${stack[sPointer - 1]}`);
}

let program = [
    PUSH, 10,
    PUSH, 10,
    ADD,
    PUSH, 5,
    MINUS
];

virtualMachine(program);
