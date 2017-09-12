/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
	Listing.find({ name: 'Library West' }, function(err, input) {
		if (err) throw err;
		console.log(input);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.findOneAndRemove({ code: 'CABL' }, function(err, input) {
		if (err) throw err;
		console.log(input);
	});
	
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    Listing.findOneAndUpdate({ code: 'PHL'},{address: '1275 Center Drive, Gainesville, FL 32611, United States'}, function(err, input) {
		if (err) throw err;
	/*
		logs old phelps
   */
		console.log(input);
	});
	 /*
		logs updated version
   */
	Listing.find({ code: 'PHL' }, function(err, input) {
		if (err) throw err;
		console.log(input);
	});
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   	Listing.find({}, function(err, input) {
		if (err) throw err;
		console.log(input);
	})
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
