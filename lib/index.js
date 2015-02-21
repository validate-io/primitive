/**
*
*	VALIDATE: primitive
*
*
*	DESCRIPTION:
*		- Validates if a value is a JavaScript primitive.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

/**
* FUNCTION: isPrimitive( value )
*	Validates if a value is a JavaScript primitive.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a JavaScript primitive
*/
function isPrimitive( value ) {
	var type = typeof value;
	return type === 'string' || type === 'number' || type === 'boolean' || value === null || value === undefined;
} // end FUNCTION isPrimitive()


// EXPORTS //

module.exports = isPrimitive;
