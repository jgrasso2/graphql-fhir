const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary HealthcareService.serviceType Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HealthcareServiceServiceType_Input',
	description: 'A specific type of service that may be delivered or performed.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
			type: {
				type: new GraphQLNonNull(require('./codeableconcept.input')),
				description:
					'The specific type of service being delivered or performed.',
			},
			specialty: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'Collection of specialties handled by the service site. This is more of a medical term.',
			},
		}),
});
