import { test as baseTest } from '@playwright/test'

type myFixture = {

    fixture1: any
}
type workerFixture = {

    myWorkerFixture : any
}

export const test = baseTest.extend<myFixture,workerFixture>({
    fixture1: async ({}, use) => {
        const fixture1 = "I am a fixture1";
        console.log('Before part of fixture1');
        console.log('2 Before part of fixture1');
        console.log('3 Before part of fixture1');
        await use(fixture1);
        console.log('After part of fixture1');

    },
    myWorkerFixture: [async({},use)=>{
        const myWorkerFixture = "I am a myWorkerFixture";
        console.log('Before part of myWorkerFixture');
        await use(myWorkerFixture);
        console.log('After part of myWorkerFixture');


    },{scope:"worker"}]

})