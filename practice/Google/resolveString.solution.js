/*
Solution using regex
*/ const variables = {
  x: 'new',
  y: '%xworld',
  z: 'hello'
};

function updateVariable(varName, value) {
  variables[varName] = value;
}

function resolveStringUsingRegex(input) {
  return input.replace(/%([a-zA-Z])/g, (match, varName) => {
    if (varName in variables) {
      const str = variables[varName];
      // Check if the str itself contains variables
      if (/%[a-zA-Z]/.test(str)) {
        // Recursively resolve nested variables
        return resolveStringUsingRegex(str);
      }
      return str;
    }
    return match;
  });
}

function resolveString(input) {
  let result = '';
  let i = 0;

  while (i < input.length) {
    if (input[i] === '%' && i + 1 < input.length) {
      const varName = input[i + 1];
      if (varName in variables) {
        result += resolveString(variables[varName]); // Recursive call for nested variables
      } else {
        result += `%${varName}`;
      }
      i += 2; // Skip the % and the variable name
    } else {
      result += input[i];
      i++;
    }
  }

  return result;
}

// Test cases
console.log(resolveStringUsingRegex('%z_%x_%y_world')); // Output: hello_new_newworld_world

updateVariable('x', 'updated');
console.log(resolveStringUsingRegex('%z_%x_%y_world')); // Output: hello_updated_updatedworld_world

updateVariable('y', 'newvalue');
console.log(resolveStringUsingRegex('%z_%x_%y_world')); // Output: hello_updated_newvalue_world

console.log(resolveStringUsingRegex('No variables here')); // Output: No variables here

console.log(resolveStringUsingRegex('%a_%b_%c')); // Output: %a_%b_%c (undefined variables remain unchanged)

updateVariable('a', 'first');
updateVariable('b', '%a_second');
updateVariable('c', '%b_third');
console.log(resolveStringUsingRegex('%a_%b_%c')); // Output: first_first_second_first_second_third

console.log('------------------------------');
console.log('|       Without Regex         |');
console.log('------------------------------');

// Test cases
console.log(resolveString('%z_%x_%y_world')); // Output: hello_new_newworld_world

updateVariable('x', 'updated');
console.log(resolveString('%z_%x_%y_world')); // Output: hello_updated_updatedworld_world

updateVariable('y', 'newvalue');
console.log(resolveString('%z_%x_%y_world')); // Output: hello_updated_newvalue_world

console.log(resolveString('No variables here')); // Output: No variables here

console.log(resolveString('%a_%b_%c')); // Output: %a_%b_%c (undefined variables remain unchanged)

updateVariable('a', 'first');
updateVariable('b', '%a_second');
updateVariable('c', '%b_third');
console.log(resolveString('%a_%b_%c')); // Output: first_first_second_first_second_third
