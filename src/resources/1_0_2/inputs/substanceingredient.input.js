const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Substance.ingredient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SubstanceIngredient_Input',
	description: 'A substance can be composed of other substances.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			quantity: {
				type: require('./ratio.input'),
				description:
					'The amount of the ingredient in the substance - a concentration ratio.',
			},
			substance: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'Another substance that is a component of this substance.',
			},
		}),
});
