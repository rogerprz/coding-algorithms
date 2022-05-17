// Domain ID, Result ID, Score
// Paginating
// What does ++ do.
// we want to spread out domain results over other pages
// We want to grab the top results with unique domains.
// ttd.com, google.com. stackoverlo.com
// Result ID unique id
//  Score has been sorted from highest to lowest

// Grab the first 10 unique domains
//

// We want to loop through each item
// If it is a unique domain id
// we want to push/move something into an Obj that unique id
// We continue looping until we see a duplicate id
// Once we see a duplicate id we push/move it into the next page.
//

let list = [
  '1,28,300',
  '4,5,209',
  '20,7,208',
  '23,8,207',
  '16,10,206',
  '1,16,205',
  '1,31,204',
  '6,29,204',
  '7,20,203',
  '8,21,202',
  '2,18,201',
  '2,30,200',
  '15,27,109',
  '10,13,108',
  '11,26,107',
  '12,9,106',
  '13,1,105',
  '22,17,104',
  '1,2,103',
  '28,24,102',
  '18,14,11',
  '6,25,10',
  '19,15,9',
  '3,19,8',
  '3,11,7',
  '27,12,6',
  '1,3,5',
  '25,4,4',
  '5,6,3',
  '29,22,2',
  '30,23,1'
];

function paginationWithHigestScoreAndUnique(list, pageSize) {
  let obj = {};

  let counter = 0;
  let number = 1;
  while (counter < list.length) {
    let [domainId, resultId, score] = list[counter].split(',').map(Number);
    if (obj[`page${number}`] === undefined) {
      obj[`page${number}`] = [];
    }
    if (obj[`page${number}`]) {
      let inPage = false;
      for (let i = 0; i < obj[`page${number}`].length; i++) {
        let [domainId2, resultId2, score2] = obj[`page${number}`][i].split(',').map(Number);
        if (domainId === domainId2) inPage = true;
      }
      if (!inPage) {
        obj[`page${number}`].push(list[counter]);
      }
    }
    counter++;
  }
  let array = obj['page1'];
  let result = [];
  for (let i = 0; i < array.length; i += pageSize) {
    result = array.slice(i, i + pageSize);
  }
  console.log('OO:', result);
  return result;
}

function paginate(list, pageSize) {
  let leftOvers = list;
  const pags = [];
  while (leftOvers.length) {
    const [page, nextLeftOvers] = getPage(list, pageSize);
    pages.push(page);
    leftOvers = nextLeftovers;
  }
}

function getDomainId(item) {
  return item.split(',')[0];
}

function getPage(list, pageSize) {
  const leftOvers = [];
  const page = [];
  const domains = {};
  list.forEach((item) => {
    if (domains[getDomainId(item)] || page.length > pageSize) {
      leftOvers.push(item);
    } else {
      page.push(item);
      domains[getDomainId(item)] = true;
    }
  });
  return [page, leftOvers];
}

paginationWithHigestScoreAndUnique(list, 2);
// SOLUTION (Page size of 12)
// "1,28,300",
// "4,5,209",
// "20,7,208",
// "23,8,207",
// "16,10,206",
// "6,29,204",
// "7,20,203",
// "8,21,202",
// "2,18,201",
// "15,27,109",
// "10,13,108",
// "11,26,107",

// "1,16,205",
// "2,30,200",
// "12,9,106",
// "13,1,105",
// "22,17,104",
// "28,24,102",
// "18,14,11",
// "6,25,10",
// "19,15,9",
// "3,19,8",

// "27,12,6",
// "25,4,4",

// "1,31,204",
// "1,2,103",
// "3,11,7",
// "1,3,5",
// "5,6,3",
// "29,22,2",
// "30,23,1"
