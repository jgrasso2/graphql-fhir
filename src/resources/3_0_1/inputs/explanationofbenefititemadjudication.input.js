const { GraphQLInputObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ExplanationOfBenefit.item.adjudication Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitItemAdjudication_Input',
	description: 'The adjudications results.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-reason
		reason: {
			type: require('./codeableconcept.input'),
			description: 'Adjudication reason such as limit reached.'
		},
		amount: {
			type: require('./money.input'),
			description: 'Monitory amount associated with the code.'
		},
		value: {
			type: GraphQLFloat,
			description: 'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.'
		},
		_value: {
			type: require('./element.input'),
			description: 'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.'
		}
	})
});
