/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isPrimitive = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-primitive', function tests() {

	it( 'should export a function', function test() {
		expect( isPrimitive ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var values = [
			'',
			0,
			false,
			undefined,
			null
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( isPrimitive( values[i] ) );
		}
	});

	it( 'should negatively validate', function test() {
		var values = [
			new Boolean(),
			new String(),
			new Array(),
			new Object(),
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isPrimitive( value );
		}
	});

});
