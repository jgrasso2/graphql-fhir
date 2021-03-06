const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Bundle.link Schema
 */
module.exports = new GraphQLObjectType({
	name: 'BundleLink',
	description: 'A series of links that provide context to this bundle.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			relation: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).',
			},
			_relation: {
				type: require('./element.schema'),
				description:
					'A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).',
			},
			url: {
				type: new GraphQLNonNull(UriScalar),
				description: 'The reference details for the link.',
			},
			_url: {
				type: require('./element.schema'),
				description: 'The reference details for the link.',
			},
		}),
});
