const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SupplyRequest.when Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SupplyRequestWhen_Input',
	description: 'When the request should be fulfilled.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-when
			code: {
				type: require('./codeableconcept.input'),
				description: 'Code indicating when the request should be fulfilled.',
			},
			schedule: {
				type: require('./timing.input'),
				description: 'Formal fulfillment schedule.',
			},
		}),
});
