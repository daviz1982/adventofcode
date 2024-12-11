// TODO read the lists from a plain text file

const getTotalDistance = (list1, list2) => {
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);
  let totalDistance = 0;
  for (let i = 0; i < list1.length; i++) {
    totalDistance += Math.abs(list1[i] - list2[i]);
  }
  return totalDistance;
}
