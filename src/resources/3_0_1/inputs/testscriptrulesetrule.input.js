const IdScalar = require('../scalars/id.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestScript.ruleset.rule Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptRulesetRule_Input',
	description: 'The referenced rule within the external ruleset template.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			ruleId: {
				type: new GraphQLNonNull(IdScalar),
				description:
					'Id of the referenced rule within the external ruleset template.',
			},
			_ruleId: {
				type: require('./element.input'),
				description:
					'Id of the referenced rule within the external ruleset template.',
			},
			param: {
				type: new GraphQLList(require('./testscriptrulesetruleparam.input')),
				description:
					'Each rule template can take one or more parameters for rule evaluation.',
			},
		}),
});
