import { test } from "../fixtures/MyCustomFixture"

test('use of fixture', async ({ fixture1 }) => {

    console.log(fixture1);
    console.log('line no 4 ');
    console.log('line no 5 ');
    console.log('line no 6 ');
})

test('use of worker fixture', async ({ myWorkerFixture }) => {

    console.log(myWorkerFixture);

})

test('use of worker fixture2', async ({ myWorkerFixture }) => {

    console.log(myWorkerFixture);

})

test('use of worker fixture3', async ({ myWorkerFixture }) => {

    console.log(myWorkerFixture);
})

// Before and After will get executed only once per worker for worker fixture (scope is worker)

// below is the output
// Running global setup if any…

// Running 4 tests using 1 worker
// [chromium] › PracticeFixture.spec.ts:3:5 › use of fixture
// Before part of fixture1
// 2 Before part of fixture1
// 3 Before part of fixture1
// I am a fixture1
// line no 4 
// line no 5 
// line no 6 
// After part of fixture1
// [chromium] › PracticeFixture.spec.ts:11:5 › use of worker fixture
// Before part of myWorkerFixture
// I am a myWorkerFixture
// [chromium] › PracticeFixture.spec.ts:17:5 › use of worker fixture2
// I am a myWorkerFixture
// [chromium] › PracticeFixture.spec.ts:24:5 › use of worker fixture3
// I am a myWorkerFixture
// After part of myWorkerFixture
//   4 passed (1.6s)




