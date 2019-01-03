const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary SearchParameter.component Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SearchParameterComponent_Input',
	description: 'Used to define the parts of a composite search parameter.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		definition: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The definition of the search parameter that describes this part.'
		},
		expression: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.'
		},
		_expression: {
			type: require('./element.input'),
			description: 'A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.'
		}
	})
});
