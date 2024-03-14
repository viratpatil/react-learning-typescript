export default class GenClass<T> {
    private value : T | undefined;

    public getValue = (): T | undefined => {
        return this.value;
    }

    public setValue = (value: T) => {
        this.value = value;
    }

    public toString = (): string  => {
        return `${this.value}`;
    }

    public checkCasting = () => {
        let x: unknown = 'aaaaaaaa';
        console.log(`checking casting:  ${(<string>x).length}`);
    }

    public checkUnionTypes = () => {
        let printStatusCode = (code: string | number) => {
                console.log( typeof code + ' ** ' +  code);
        }

        printStatusCode(400);
        printStatusCode('422');
    }

    public learnTS = () => {
        let age: number = 20;
        if( age < 50) {
            age +=40;
        }

        let nummbers: number[] = [1,2,3];
    }
}

