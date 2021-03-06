const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Encounter.hospitalization Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EncounterHospitalization_Input',
	description: 'Details about the admission to a healthcare service.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			preAdmissionIdentifier: {
				type: require('./identifier.input'),
				description: 'Pre-admission identifier.',
			},
			origin: {
				type: require('./reference.input'),
				description:
					'The location from which the patient came before admission.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-admit-source
			admitSource: {
				type: require('./codeableconcept.input'),
				description:
					'From where patient was admitted (physician referral, transfer).',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0092
			reAdmission: {
				type: require('./codeableconcept.input'),
				description:
					'Whether this hospitalization is a readmission and why if known.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-diet
			dietPreference: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description: 'Diet preferences reported by the patient.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-special-courtesy
			specialCourtesy: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description: 'Special courtesies (VIP, board member).',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-special-arrangements
			specialArrangement: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.',
			},
			destination: {
				type: require('./reference.input'),
				description: 'Location to which the patient is discharged.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-discharge-disposition
			dischargeDisposition: {
				type: require('./codeableconcept.input'),
				description: 'Category or kind of location after discharge.',
			},
		}),
});
