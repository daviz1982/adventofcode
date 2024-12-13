const fs = require('fs');

function readListsFromFile(filename) {
  const list1 = [];
  const list2 = [];
  const data = fs.readFileSync(filename, 'utf8');
  const lines = data.split('\n');

  lines.forEach(line => {
    if (line.trim()) {  // skip empty lines
      const [num1, num2] = line.split(/\s+/).map(Number);
      list1.push(num1);
      list2.push(num2);
    }
  });

  return [list1, list2];
}
/*
// Example usage
const filename = 'Untitled-1';
const [list1, list2] = readListsFromFile(filename);
console.log("List 1:", list1);
console.log("List 2:", list2);
*/
