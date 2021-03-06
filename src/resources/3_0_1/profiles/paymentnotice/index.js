const {
	PaymentNoticeQuery,
	PaymentNoticeListQuery,
	PaymentNoticeInstanceQuery,
} = require('./query');

const {
	PaymentNoticeCreateMutation,
	PaymentNoticeUpdateMutation,
	PaymentNoticeDeleteMutation,
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
		PaymentNotice: PaymentNoticeQuery,
		PaymentNoticeList: PaymentNoticeListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		PaymentNoticeCreate: PaymentNoticeCreateMutation,
		PaymentNoticeUpdate: PaymentNoticeUpdateMutation,
		PaymentNoticeDelete: PaymentNoticeDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'PaymentNotice',
		path: '/3_0_1/PaymentNotice/:id',
		query: PaymentNoticeInstanceQuery,
	},
};
