var _ = require('underscore');
var Backbone = require('Backbone');
var Deployment = require('deployment');

module.exports = Backbone.Collection.extend({
    model: Deployment,
    url: 'api/deployments',
    // reverse-sort by date created
    comparator: function (d) { return -d.get('dateCreated'); }
});
