const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ClaimResponse.item.detail.subDetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseItemDetailSubDetail_Input',
	description: 'The third tier service adjudications for submitted services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequenceLinkId: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequenceLinkId: {
			type: require('./element.input'),
			description: 'A service line number.'
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.'
		},
		_noteNumber: {
			type: require('./element.input'),
			description: 'A list of note references to the notes provided below.'
		}
	})
});
