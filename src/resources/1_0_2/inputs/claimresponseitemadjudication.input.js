const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLFloat,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ClaimResponse.item.adjudication Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseItemAdjudication_Input',
	description: 'The adjudications results.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication
			code: {
				type: new GraphQLNonNull(require('./coding.input')),
				description:
					'Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.',
			},
			amount: {
				type: require('./quantity.input'),
				description: 'Monetary amount associated with the code.',
			},
			value: {
				type: GraphQLFloat,
				description:
					'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.',
			},
			_value: {
				type: require('./element.input'),
				description:
					'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.',
			},
		}),
});
