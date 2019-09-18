import { isEven } from './utils';

describe('Functions', () => {
    describe('Parameters to functions', () => {
        it('should overload', () => {
            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        describe('Returning stuff', () => {
            it('should return multiple things OOP style', () => {
                function formatName(first: string, last: string, mi?: string): { fullName: string, characters: number } {
                    let fullName = `${last}, ${first}`;
                    if (mi) {
                        fullName += ` ${mi}.`;
                    }
                    return { fullName, characters: fullName.length };
                }

                const result = formatName('Mom', 'Dad');
                expect(result.fullName).toBe('Dad, Mom');
                expect(result.characters).toBe(8);

                // Object Destructuring
                const { fullName } = formatName('Dad', 'Uncle');
                expect(fullName).toBe('Uncle, Dad');

                const { fullName: fn } = formatName('Dad', 'Uncle');
                expect(fn).toBe('Uncle, Dad');
            });

            it('should return multiple things functional style', () => {
                // Array Destructuring with tuple return type
                function formatName(first: string, last: string, mi?: string): [string, number] {
                    let fullName = `${last}, ${first}`;
                    if (mi) {
                        fullName += ` ${mi}.`;
                    }
                    return [fullName, fullName.length];
                }

                const result = formatName('Dad', 'Mom');
                expect(result[0]).toBe('Mom, Dad');
                expect(result[1]).toBe(8);

                const [fn, l] = formatName('dad', 'uncle');
                expect(fn).toBe('uncle, dad');
                expect(l).toBe(10);
            });

            it('should be a fun object destructuring exercise', () => {
                const employee = {
                    firstName: 'Sue',
                    lastName: 'Smith',
                    job: 'DEV',
                    lastPayChecks: [23_500, 22_800, 18_123]
                };

                const { lastName: last, job } = employee;
                expect(last).toBe('Smith');
                expect(job).toBe('DEV');
            });

            it('should add some numbers', () => {
                function add(a: number = 20, b: number = 10, ...rest: number[]) {
                    const firstTwo = a + b;
                    return rest.reduce((s, n) => s + n, firstTwo);
                }

                expect(add(2, 2)).toBe(4);
                expect(add(2)).toBe(12);
                expect(add()).toBe(30);
                expect(add(1, 2, 3)).toBe(6);
                expect(add(undefined, 5)).toBe(25);
            });
        });
    });
});

describe('Array methods', () => {
    const numbers = [1, 2, 3];
    it('should do something with each of the numbers in the array', () => {
        numbers.forEach((n) => console.log(n));
    });

    describe('should be array methods that return something', () => {
        it('should create a new array using filter', () => {
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2]);
        });

        it('should create an array of mutated elements', () => {
            const doubled = numbers.map((val) => {
                return val * 2;
            });
            expect(doubled).toEqual([2, 4, 6]);
        });

        it('should test', () => {
            const doubled = numbers.filter(isEven).map((val) => val * 2);
            expect(doubled).toEqual([4]);
        });

        it('should return a single value', () => {
            const allEven = numbers.every(isEven);
            expect(allEven).toBe(false);

            const someEven = numbers.some(isEven);
            expect(someEven).toBe(true);
        });

        it('should reduce an array down to a single value', () => {
            const sum = numbers.reduce((prev, cur) => prev + cur);
            expect(sum).toBe(6);

            const sum2 = numbers.reduce((prev, cur) => prev + cur, 10);
            expect(sum2).toBe(16);
        });
    });
});
