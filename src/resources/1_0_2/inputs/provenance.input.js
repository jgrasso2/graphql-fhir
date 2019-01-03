const InstantScalar = require('../scalars/instant.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ProvenanceResourceInputType = new GraphQLEnumType({
	name: 'ProvenanceResourceInputType',
	values: {
		Provenance: { value: 'Provenance' }
	}
});

/**
 * @name exports
 * @summary Provenance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Provenance_Input',
	description: 'Base StructureDefinition for Provenance Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ProvenanceResourceInputType),
			description: 'Type of this resource.'
		},
		target: {
			type: new GraphQLList(new GraphQLNonNull(require('./reference.input'))),
			description: 'The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.'
		},
		period: {
			type: require('./period.input'),
			description: 'The period during which the activity occurred.'
		},
		recorded: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The instant of time at which the activity was recorded.'
		},
		_recorded: {
			type: require('./element.input'),
			description: 'The instant of time at which the activity was recorded.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		reason: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The reason that the activity was taking place.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ProvenanceEventCurrentState
		activity: {
			type: require('./codeableconcept.input'),
			description: 'An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.'
		},
		location: {
			type: require('./reference.input'),
			description: 'Where the activity occurred, if relevant.'
		},
		policy: {
			type: new GraphQLList(UriScalar),
			description: 'Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.'
		},
		_policy: {
			type: require('./element.input'),
			description: 'Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.'
		},
		agent: {
			type: new GraphQLList(require('./provenanceagent.input')),
			description: 'An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.'
		},
		entity: {
			type: new GraphQLList(require('./provenanceentity.input')),
			description: 'An entity used in this activity.'
		},
		signature: {
			type: new GraphQLList(require('./signature.input')),
			description: 'A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.'
		}
	})
});
