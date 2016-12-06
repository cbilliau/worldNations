export default function(arr) {
  console.log(arr);
  // let sorted = arr.sort((a, b) => (a.region) - (b.region));

  let compare = (a,b) => {
  if (a.region < b.region)
    return -1;
  if (a.region > b.region)
    return 1;
  return 0;
  }

  let regionSorted =  arr.sort(compare);

  return regionSorted;

};
