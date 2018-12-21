# Nova Test Framework Design

## Testing concepts

* Testing framework (Nova in our case)
* Tests 
* Code

## Concepts

* Test runner
* Test definition
* Assertions
    * `assertEquals`

## MVP Example

```javascript
import {Nova, test, assertEquals} from 'nova';

test("2 + 2 = 4", () => {
    const result = 2 + 2;
    assertEquals(4, result);
});

test("3 * 2 = 6", () => {
    const result = 3 * 2;
    assertEquals(8, result);
});

Nova.runAllTests();

/* Output:
1. Test "2 + 2 = 4": Success!
2. Test "3 * 2 = 6": Failure!
    Expected: 8, Got: 6.
*/
```

## TODO Later

Extract Nova to it's own package.json
