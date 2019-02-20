const {allow, shield} = require('graphql-shield');

const {isAuthenticated} = require('./rules/is-authenticated');

const permissions = shield(
	{
		Mutation: {
			login: allow,
			signup: allow
		}
	},
	{
		fallbackRule: isAuthenticated
	}
);

module.exports = {
	permissions
};
