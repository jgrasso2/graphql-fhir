const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ClaimResponse.error Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseError',
	description: 'Mutually exclusive with Services Provided (Item).',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			sequenceLinkId: {
				type: PositiveIntScalar,
				description:
					'The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.',
			},
			_sequenceLinkId: {
				type: require('./element.schema'),
				description:
					'The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.',
			},
			detailSequenceLinkId: {
				type: PositiveIntScalar,
				description:
					'The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.',
			},
			_detailSequenceLinkId: {
				type: require('./element.schema'),
				description:
					'The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.',
			},
			subdetailSequenceLinkId: {
				type: PositiveIntScalar,
				description:
					'The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.',
			},
			_subdetailSequenceLinkId: {
				type: require('./element.schema'),
				description:
					'The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
			code: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description:
					'An error code,from a specified code system, which details why the claim could not be adjudicated.',
			},
		}),
});
