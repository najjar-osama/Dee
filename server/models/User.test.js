const expect = require("chai").expect;
const mongoose = require("mongoose");
const User = require("./User");

describe("Testing User Model", () => {
  before(() => {
    mongoose.models["User"] ? delete mongoose.models["User"] : false; // false == do nothing
  });

  describe("Empty User is Invalid", () => {
    it("should complain that user is empty", done => {
      const emptyUser = new User();
      emptyUser.validate(err => {
        expect(err).to.exist;
        done();
      });
    });
  });

  describe("User required fields", () => {
    it("should complain that email is required", done => {
      const user = new User({ password: "secret" });
      user.validate(err => {
        expect(err.errors.email).to.exist;
        done();
      });
    });
  });

  describe("User email field should be a valid email", () => {
    const invalidEmail = "I am email";
    it(`should complain about this invalid email:${invalidEmail}`, done => {
      const user = new User({ email: invalidEmail });
      user.validate(err => {
        expect(err.errors.email).to.exist;
        done();
      });
    });
  });
});
