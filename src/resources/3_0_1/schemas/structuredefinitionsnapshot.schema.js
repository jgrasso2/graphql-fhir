const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary StructureDefinition.snapshot Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureDefinitionSnapshot',
	description:
		'A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			element: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./elementdefinition.schema')),
				),
				description:
					'Captures constraints on each element within the resource.',
			},
		}),
});
