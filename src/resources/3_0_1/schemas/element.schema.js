const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Element Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Element',
	description: 'Base StructureDefinition for Element Type.',
	fields: () =>
		extendSchema({
			id: {
				type: GraphQLString,
				description:
					'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
			},
			_id: {
				type: require('./element.schema'),
				description:
					'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
			},
			extension: {
				type: new GraphQLList(require('./extension.schema')),
				description:
					'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
			},
		}),
});
