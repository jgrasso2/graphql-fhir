const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Conformance.rest.interaction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConformanceRestInteraction',
	description: 'A specification of restful operations supported by the system.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/system-restful-interaction
			code: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'A coded identifier of the operation, supported by the system.',
			},
			_code: {
				type: require('./element.schema'),
				description:
					'A coded identifier of the operation, supported by the system.',
			},
			documentation: {
				type: GraphQLString,
				description:
					'Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.',
			},
			_documentation: {
				type: require('./element.schema'),
				description:
					'Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.',
			},
		}),
});
