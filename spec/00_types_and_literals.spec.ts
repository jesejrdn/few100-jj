
describe('Declaring variables', () => {
    describe('using let', () => {
        it('should declare a variable with let', () => {
            let name;
            name = 'dad';
            expect(name).toBe('dad');
            expect(typeof (name)).toBe('string');

            name = 123;

            expect(name).toBe(123);
            expect(typeof (name)).toBe('number');
        });

        it('should explicitly type a variable with let', () => {
            let name: string;
            name = 'dad';
            expect(name).toBe('dad');
            expect(typeof (name)).toBe('string');
        });

        it('should implicitly type a variable with let', () => {
            let name = 'dad';
            name = 'mom';
            expect(name).toBe('mom');
            expect(typeof (name)).toBe('string');
        });
    });

    describe('constants', () => {
        it('should have them and prefer them', () => {
            const name = { firstName: 'dad' };
            name.firstName = 'mom';
            expect(name).toEqual({ firstName: 'mom' });
        });
    });

    describe('Var is bad (hoisting)', () => {
        it('should not have block scope', () => {

            const mom = true;
            if (mom) {
                // tslint:disable-next-line: no-var-keyword
                var dad;
                dad = false;
            }
            expect(dad).toBe(false);
        });
    });

    describe('Literals', () => {
        it('should have a bunch of numeric literals', () => {
            const n1 = 123;
            const n2 = 3.14;
            const bigNumber = 12_123_520;
            const hexNumber = 0xff;
            const binaryNumber = 0b1010101;
            const octalNumber = 0o567;

            let x: number;
            x = octalNumber;

            const pay = parseInt('42.83', 10);
            expect(pay).toBe(42);
            const pay2 = parseFloat('42.83');
            expect(pay2).toBe(42.83);
        });

        it('should have a string literal', () => {
            const title = 'Jones';

            expect(title).toBe('Jones');
        });

        it('should have template strings', () => {
            const title = 'Jones';
            const templateString = `hello ${title}`;
            expect(templateString).toBe('hello Jones');
        });

        it('should have array literals', () => {
            const luckyNumbers = [1, 2, 3];
            expect(luckyNumbers[0]).toBe(1);

            let someArray: (string | number)[];
            let someArray2: Array<string | number>;

            someArray = ['jesse', 1];

            expect(luckyNumbers[0]).toBe(1);
        });

        it('should have tuples', () => {
            type SettingOption = 'log' | 'warn' | 'trace';
            type Setting = [boolean, SettingOption, SettingOption, SettingOption];
            let setting: Setting;

            setting = [true, 'log', 'warn', 'trace'];
            const isSet = setting[0];
            const allowLog = setting[1];
        });

    });

    describe('Function literals', () => {
        it('should be three  different ways to declare a function', () => {
            // forward reference
            expect(add(1, 1)).toBe(2);

            // named -> these get hoisted and can be forward referenced
            function add(a: number, b: number): number {
                return a + b;
            }

            // anonymous
            const subtract = function (a: number, b: number): number {
                return a - b;
            };

            // anonymous arrow
            const multiply = (a: number, b: number): number => {
                return a * b;
            };

            expect(multiply(1, 1)).toBe(1);
        });
    });

    describe('Object literals', () => {
        it('should have object literals', () => {
            interface Movie {
                title: string;
                director: string;
                yearRelease: number;
                [key: string]: any;
                MPAARating?: string;
            }

            const movie: Movie = {
                title: 'Dad',
                director: 'dad',
                yearRelease: 3030
            };

            expect(movie.title).toBe('Dad');
            // tslint:disable-next-line: no-string-literal
            expect(movie['title']).toBe('Dad');

            movie.MPAARating = 'for dads';
            movie.cast = ['dad'];
            movie.watched = false;
        });

        it('should make a dictionary', () => {
            interface Vehicle {
                vin: string;
                make: string;
                model: string;
                year: number;
            }

            interface Dictionary<T> {
                [key: string]: T;
            }

            const myVehicles: Dictionary<Vehicle> = {
                '83989sjioe': {
                    vin: '83989sjioe',
                    make: 'Chevy',
                    model: 'Bolt',
                    year: 2018
                },
                xyzpdq: {
                    vin: 'xyzpdq',
                    make: 'Honda',
                    model: 'Pilot',
                    year: 2019
                }
            };

            expect(myVehicles['83989sjioe'].make).toBe('Chevy');
        });

        it('should have duck typing', () => {
            //duck typing
            function doSomething(thing: any) {
                console.log(thing.message);
            }

            // Structural typing with anonymous interface
            function doSomething2(thing: { message: string }) {
                console.log(thing.message);
            }

            // Logs undefined
            doSomething('dad');
            // doSomething2('dad'); compile error

            // Logs dad
            doSomething({ message: 'dad' });
            doSomething2({ message: 'dad' });
        });
    });
});
