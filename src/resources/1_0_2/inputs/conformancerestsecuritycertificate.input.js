const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Conformance.rest.security.certificate Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceRestSecurityCertificate_Input',
	description: 'Certificates associated with security profiles.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		type: {
			type: CodeScalar,
			description: 'Mime type for certificate.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Mime type for certificate.'
		},
		blob: {
			type: Base64BinaryScalar,
			description: 'Actual certificate.'
		},
		_blob: {
			type: require('./element.input'),
			description: 'Actual certificate.'
		}
	})
});
