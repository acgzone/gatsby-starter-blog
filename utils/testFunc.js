function testFunc(func, N = 100000) {
  let start = Date.now();

  for (let i = 0; i < N; i += 1) {
    func();
  }
  const end = Date.now();
  console.log(`${func} excutes ${N} times, cost ${(end - start)} ms.`);
}

exports.testFunc = testFunc;