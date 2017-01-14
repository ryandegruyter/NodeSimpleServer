import {suite, test} from "mocha-typescript";
import {IntervalWorker} from "./interval-worker";
import {expect} from 'chai';
import sinon = require('sinon');

@suite("Interval worker")
class IntervalWorkerTest {

    private static id: string = "12";
    private worker: IntervalWorker;

    before() {
        this.worker = new IntervalWorker(IntervalWorkerTest.id);
    }

    @test("should set id")
    testSetId() {
        expect(this.worker.workerId).to.eql(IntervalWorkerTest.id);
    }
}