// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DiagnosticReportSchema = require('../../schemas/diagnosticreport.schema');

// Inputs
const DiagnosticReportInput = require('../../inputs/diagnosticreport.input');

// Resolvers
const {
	diagnosticreportCreateResolver,
	diagnosticreportUpdateResolver,
	diagnosticreportDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DiagnosticReport',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a DiagnosticReport record.',
	},
	resource: {
		type: new GraphQLNonNull(DiagnosticReportInput),
		description: 'DiagnosticReport Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a DiagnosticReport record for deletion.',
	},
};

/**
 * @name exports.DiagnosticReportCreateMutation
 * @summary DiagnosticReportCreate Mutation.
 */
module.exports.DiagnosticReportCreateMutation = {
	args: WriteArgs,
	description: 'Create a DiagnosticReport',
	resolve: scopeInvariant(scopeOptions, diagnosticreportCreateResolver),
	type: DiagnosticReportSchema,
};

/**
 * @name exports.DiagnosticReportUpdateMutation
 * @summary DiagnosticReportUpdate Mutation.
 */
module.exports.DiagnosticReportUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DiagnosticReports',
	resolve: scopeInvariant(scopeOptions, diagnosticreportUpdateResolver),
	type: DiagnosticReportSchema,
};

/**
 * @name exports.DiagnosticReportDeleteMutation
 * @summary DiagnosticReportDelete Mutation.
 */
module.exports.DiagnosticReportDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DiagnosticReport',
	resolve: scopeInvariant(scopeOptions, diagnosticreportDeleteResolver),
	type: DiagnosticReportSchema,
};
