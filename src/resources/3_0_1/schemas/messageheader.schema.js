const InstantScalar = require('../scalars/instant.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let MessageHeaderResourceType = new GraphQLEnumType({
	name: 'MessageHeaderResourceType',
	values: {
		MessageHeader: { value: 'MessageHeader' },
	},
});

/**
 * @name exports
 * @summary MessageHeader Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageHeader',
	description: 'Base StructureDefinition for MessageHeader Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(MessageHeaderResourceType),
				description: 'Type of this resource.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/message-events
			event: {
				type: new GraphQLNonNull(require('./coding.schema')),
				description:
					"Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value 'http://hl7.org/fhir/message-events'.",
			},
			destination: {
				type: new GraphQLList(require('./messageheaderdestination.schema')),
				description:
					'The destination application which the message is intended for.',
			},
			receiver: {
				type: require('./reference.schema'),
				description:
					"Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.",
			},
			sender: {
				type: require('./reference.schema'),
				description:
					'Identifies the sending system to allow the use of a trust relationship.',
			},
			timestamp: {
				type: new GraphQLNonNull(InstantScalar),
				description: 'The time that the message was sent.',
			},
			_timestamp: {
				type: require('./element.schema'),
				description: 'The time that the message was sent.',
			},
			enterer: {
				type: require('./reference.schema'),
				description:
					'The person or device that performed the data entry leading to this message. When there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions.',
			},
			author: {
				type: require('./reference.schema'),
				description:
					'The logical author of the message - the person or device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions.',
			},
			source: {
				type: new GraphQLNonNull(require('./messageheadersource.schema')),
				description:
					'The source application from which this message originated.',
			},
			responsible: {
				type: require('./reference.schema'),
				description:
					'The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/message-reason-encounter
			reason: {
				type: require('./codeableconcept.schema'),
				description:
					'Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.',
			},
			response: {
				type: require('./messageheaderresponse.schema'),
				description:
					'Information about the message that this message is a response to.  Only present if this message is a response.',
			},
			focus: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'The actual data of the message - a reference to the root/focus class of the event.',
			},
		}),
});
