const {
	EligibilityRequestQuery,
	EligibilityRequestListQuery,
	EligibilityRequestInstanceQuery,
} = require('./query');

const {
	EligibilityRequestCreateMutation,
	EligibilityRequestUpdateMutation,
	EligibilityRequestDeleteMutation,
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
		EligibilityRequest: EligibilityRequestQuery,
		EligibilityRequestList: EligibilityRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		EligibilityRequestCreate: EligibilityRequestCreateMutation,
		EligibilityRequestUpdate: EligibilityRequestUpdateMutation,
		EligibilityRequestDelete: EligibilityRequestDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'EligibilityRequest',
		path: '/1_0_2/EligibilityRequest/:id',
		query: EligibilityRequestInstanceQuery,
	},
};
