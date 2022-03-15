"use strict";

let assert = require('assert');
let TripService = require('../src/TripService');
let sinon = require('sinon');
const UserSession = require('../src/UserSession');

describe('TripService', () => {

    const loggedUser = sinon.mock(UserSession)

    it('should... ', () => {
        //const t = new TripService().getTripsByUser(null);
        sinon.stub(UserSession, "getLoggedUser").returns(new Array(0));
        const a = UserSession.getLoggedUser();
        assert.equal(a, new Array(0));
    });

});
