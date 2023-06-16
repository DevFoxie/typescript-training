function logProperty(target: any, key: string) {
    let value = target[key];
    const getter = () => {
        console.log(`Get: ${key} => ${value}`);
        return value;
    };
    const setter = (next: any) => {
        console.log(`Set: ${key} => ${next}`);
        value = next;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}

function logParameter(target: any, key: string, index: number) {
    const metadataKey = `log_${key}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    } else {
        target[metadataKey] = [index];
    }
}

class TestClass {
    constructor(@logProperty private message: string) { }

    @logProperty
    showMessage(@logParameter times: number) {
        for (let i = 0; i < times; i++) {
            console.log(this.message);
        }
    }
}

const testInstance = new TestClass("Hello");
testInstance.showMessage(3);
