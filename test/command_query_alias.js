var assert = require("assert");
var _ = require("lodash");

var db = require("./test_db.js").db;

db.open(function(err, result) {

    assert(!err, "Error while opening the database: " + err);

    db.query("SELECT FROM OUser", function(err, results) {

        assert(!err, "Error while executing a SELECT command: " + err);

        assert.equal(results.length, 3, "Weren't there 3 users in this database?");

        db.close();
    });
});

