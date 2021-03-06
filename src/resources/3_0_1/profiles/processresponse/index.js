const {
	ProcessResponseQuery,
	ProcessResponseListQuery,
	ProcessResponseInstanceQuery,
} = require('./query');

const {
	ProcessResponseCreateMutation,
	ProcessResponseUpdateMutation,
	ProcessResponseDeleteMutation,
} = require('./mutation');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	 * Define Query Schema's here
	 * Each profile will need to define the two queries it supports
	 * and these keys must be unique across the entire application, like routes
	 */
	query: {
		ProcessResponse: ProcessResponseQuery,
		ProcessResponseList: ProcessResponseListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ProcessResponseCreate: ProcessResponseCreateMutation,
		ProcessResponseUpdate: ProcessResponseUpdateMutation,
		ProcessResponseDelete: ProcessResponseDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'ProcessResponse',
		path: '/3_0_1/ProcessResponse/:id',
		query: ProcessResponseInstanceQuery,
	},
};
