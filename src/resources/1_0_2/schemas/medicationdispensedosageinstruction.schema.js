const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary MedicationDispense.dosageInstruction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationDispenseDosageInstruction',
	description: 'Indicates how the medication is to be used by the patient.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			text: {
				type: GraphQLString,
				description:
					'Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.',
			},
			_text: {
				type: require('./element.schema'),
				description:
					'Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.',
			},
			additionalInstructions: {
				type: require('./codeableconcept.schema'),
				description:
					"Additional instructions such as 'Swallow with plenty of water' which may or may not be coded.",
			},
			timing: {
				type: require('./timing.schema'),
				description:
					"The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions.  For example, 'Every  8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:';  '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
			},
			asNeededBoolean: {
				type: GraphQLBoolean,
				description:
					"Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.",
			},
			_asNeededBoolean: {
				type: require('./element.schema'),
				description:
					"Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.",
			},
			asNeededCodeableConcept: {
				type: require('./codeableconcept.schema'),
				description:
					"Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.",
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
			siteCodeableConcept: {
				type: require('./codeableconcept.schema'),
				description:
					'A coded specification of the anatomic site where the medication first enters the body.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
			siteReference: {
				type: require('./reference.schema'),
				description:
					'A coded specification of the anatomic site where the medication first enters the body.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/route-codes
			route: {
				type: require('./codeableconcept.schema'),
				description:
					'A code specifying the route or physiological path of administration of a therapeutic agent into or onto a subject.',
			},
			method: {
				type: require('./codeableconcept.schema'),
				description:
					'A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.',
			},
			doseRange: {
				type: require('./range.schema'),
				description:
					'The amount of therapeutic or other substance given at one administration event.',
			},
			doseQuantity: {
				type: require('./quantity.schema'),
				description:
					'The amount of therapeutic or other substance given at one administration event.',
			},
			rateRatio: {
				type: require('./ratio.schema'),
				description:
					"Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.",
			},
			rateRange: {
				type: require('./range.schema'),
				description:
					"Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.",
			},
			maxDosePerPeriod: {
				type: require('./ratio.schema'),
				description:
					'The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time,  e.g. 1000mg in 24 hours.',
			},
		}),
});
