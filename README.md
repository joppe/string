# String

This is a collection of string utility functions written in `TypeScript`. The compiled files and the declaration files 
are available in the `dist` folder. 
Each function is in it's own file, therefore if you want to use one specific function you don't need to import a whole
bunch of unwanted code.

## Reverse

This function reverses the order of the characters in a string.

Definition:
```typescript
reverse(input:string):string
```

Usage:
```javascript
import * as string from 'dist/reverse';

const input = 'Hello World';
const output = string.reverse(input);

// output = dlroW olleH
```

## Pad

Pad a string to a desired length with a given character. The character can be used as a suffix or as a prefix.

Definition:
```typescript
pad(input:string, char:string, length:number, type?:PadType):string
```

Usage:
```javascript
import * as string from 'dist/pad';

const input = '1';
const output = string.pad(input, '0', 4, string.PadType.Left);

// output = '0001'
```

## Repeat

Repeat a given string a number of times.

Definition:
```typescript
repeat(input:string, count:number):string
```

Usage:
```ecmascript 6
import * as string from 'dist/repeat';

const input = 'foo';
const output = string.repeat(input, 3);

// output = 'foofoofoo'
```