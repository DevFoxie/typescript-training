function logClass(target: any, any: any) {
    console.log(any);

    console.log(`Class: ${target.name}`);
}


function logMethod(target: any, descriptor: any) {
    
    descriptor.value = function (...args: any[]) {
        console.log(`Class: ${target.constructor.name}`);
        console.log(`Method: ${target} - Arguments: ${JSON.stringify(args)}`);
    };
    console.log('descriptor', descriptor.value());
}

@logClass
class ExampleClass {
    constructor(private message: string) { }

    @logMethod
    showMessage(times: number) {
        for (let i = 0; i < times; i++) {
            console.log(this.message);
        }
    }
}

const example = new ExampleClass("Hello, world!");
example.showMessage(3);