const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Provenance.agent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProvenanceAgent',
	description:
		'An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/security-role-type
			role: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The function of the agent with respect to the activity. The security role enabling the agent with respect to the activity.',
			},
			whoUri: {
				type: new GraphQLNonNull(UriScalar),
				description:
					'The individual, device or organization that participated in the event.',
			},
			_whoUri: {
				type: require('./element.schema'),
				description:
					'The individual, device or organization that participated in the event.',
			},
			whoReference: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'The individual, device or organization that participated in the event.',
			},
			onBehalfOfUri: {
				type: UriScalar,
				description:
					'The individual, device, or organization for whom the change was made.',
			},
			_onBehalfOfUri: {
				type: require('./element.schema'),
				description:
					'The individual, device, or organization for whom the change was made.',
			},
			onBehalfOfReference: {
				type: require('./reference.schema'),
				description:
					'The individual, device, or organization for whom the change was made.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-RoleLinkType
			relatedAgentType: {
				type: require('./codeableconcept.schema'),
				description: 'The type of relationship between agents.',
			},
		}),
});
