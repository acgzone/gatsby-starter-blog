// import caculateFantasy, { getRandomCards } from './poker-fantasy';
const fantasy = require('./poker-fantasy');

const caculateFantasy = fantasy;
const { totalCall, totalHit, getRandomCards, getFrom5CardsWithCache, getFrom5Cards, getFromTop, topScore, middleScore, bottomScore, sortDesc, Cache5Cards } = fantasy;

const { testFunc } = require('./testFunc');
const randomCards = [];
// testFunc(() => randomCards.push(getRandomCards(14)), 1);

// testFunc(() => {
//   const r = getRandomCards(5);
//   r.join()
//   // r.toString();
// })
testFunc(() => {
  const r = getFrom5Cards(getRandomCards(5));
})
testFunc(() => {
  const r = getFrom5CardsWithCache(getRandomCards(5));
})
// const map = new Map([["one", 1], ["two", 2]])
// testFunc(() => {
//   map.get["one"];
// })
// testFunc(() => {
//   const r = getRandomCards(3);
//   r.sort();
//   // sortDesc(r)
// })
testFunc(() => {
  const r = getFromTop(getRandomCards(3));
})
// testFunc(() => {
//   const r = topScore(getRandomCards(3));
// })
// testFunc(() => {
//   const r = middleScore(getRandomCards(5));
// })
// testFunc(() => {
//   const r = bottomScore(getRandomCards(5));
// })
// testFunc(() => caculateFantasy(getRandomCards(13)), 1);
testFunc(() => {
  const r = caculateFantasy(getRandomCards(13))
  console.log(r)
}, 1);
testFunc(() => {
  const r = caculateFantasy(getRandomCards(14))
  console.log(r)
}, 1);
console.log(Cache5Cards.size)
console.log(totalCall, totalHit)
