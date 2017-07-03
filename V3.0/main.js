//FieldParser import
var FieldParser = require('./interpreter.js');
//Data as example
var currency = require("./Decorators_Currency.json");
var scalar = require("./Decorators_Scalar.json");
var time = require("./Decorators_Time.json");




//Returning stubData
function stubData(source)
{
	var stub=[]
	var array = []
	source.map(function(item)
	{
		array = JSON.parse(item["alias"]);
		stub.push({decoratorIRI: item["owlIRI"], aliasList:array})	
	});
	return stub
}

let fieldParser = new FieldParser(stubData(time));
fieldParser.parseField("234 lat")
