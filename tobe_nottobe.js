function expect(value) {
    return {
      toBe: function (otherValue) {
        if (value !== otherValue) {
          throw new Error("Not Equal");
        }
        return true;
      },
      notToBe: function (otherValue) {
        if (value === otherValue) {
          throw new Error("Equal");
        }
        return true;
      },
    };
  }
  
  // Example usage:
  try {
    expect(5).toBe(5); // No error
    expect("hello").notToBe("world"); // No error
    expect(42).toBe(23); // Error: "Not Equal"
    expect(true).notToBe(false); // Error: "Equal"
  } catch (error) {
    console.error(error.message);
  }
  