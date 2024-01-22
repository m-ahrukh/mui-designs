export default function TypescriptTypes() {
  let name: string = "Mahrukh";
  console.log("String Example: ", name)

  let age: number = 24;
  console.log("Number Example: ", age)

  let graduated: boolean = true;

  let experience: string[] = ['Software Engineer at Krowners', 'Java Intern at Techlogix']
  console.log("Array Example: " + experience[0] + " " + experience[1])

  let tupleExample: [string, number, boolean] = ['string', 5, true]
  console.log("Tuple Example: ", tupleExample[0] + " " + tupleExample[1] + " " + tupleExample[2])

  enum Color {
    Red,
    Green,
    Blue
  }
  let favColor: Color = Color.Green;
  console.log("Enum Example: returns index of the value in enum: ", favColor)

  let notSureType: unknown = 4
  console.log('First it is a number: ', notSureType)
  notSureType = 'maybe its a string'
  console.log('Now it is a String: ', notSureType)

  function getValue(key: string): any {
    console.log("Return type any example: ", key)
  }
  const str: string = getValue('myString');

  function warnUSer(): void {
    console.log("Exampe of void type")
  }
  warnUSer()

  let undefinedVaue: undefined = undefined
  console.log("Undefined example: ", undefinedVaue)

  let nullValue: null = null
  console.log("Null value example: ", nullValue)

  function create(obj: object | null) {
    return obj
  }

  console.log("Object creation: ", create({ prop: 0 }));
  console.log("Object creation: ", create({ prop: 'string' }));
  console.log("Object creation: ", create(null));

  let someValue: unknown = "this is a string";
  let strLength: number = (someValue as string).length;
  console.log("String Length: ", strLength)

  function isNumber(x: any): x is number {
    console.log("type of x is number")
    return typeof x === "number";
  }

  function isString(x: any): x is string {
    console.log("type of x is string")
    return typeof x === "string";
  }

  function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
      return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
  console.log("example of 'typeof' operator: " + padLeft("value", '5'));

  class C {
    a: number;
    b?: number;
  }
  let classExample = new C();
  classExample.a = 12;
  classExample.b = 20;
  console.log("Example of class: ", classExample);

  type Second = number;
  let timeInSecond: number = 10;
  let time: Second = 10;
  console.log("Example of Type aliases: ", time)

  const firstName = Symbol("firstName")
  console.log("FirstName Symbol example", firstName.description)
}