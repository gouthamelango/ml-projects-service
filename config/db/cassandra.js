/*
 * Module           : Cassandra connections
 * Source filename  : cassandra.js
 * Description      : Cassandra connection setup
 * Author           : SimplifyCV
 */

// Dependencies

var ExpressCassandra = require('express-cassandra');

/**
  * Cassandra connection setup.
  * @method
  * @name DB
  * @return Model
*/

var DB = function () {
    var models = ExpressCassandra.createClient({
        clientOptions: {
            contactPoints: [process.env.CASSANDRA_HOST],
            localDataCenter: process.env.CASSANDRA_DATACENTER,
            protocolOptions: { port: process.env.CASSANDRA_PORT },
            keyspace: process.env.CASSANDRA_DB,
            queryOptions: { consistency: ExpressCassandra.consistencies.one }
        },
        ormOptions: {
            defaultReplicationStrategy: {
                class: 'SimpleStrategy',
                replication_factor: 1
            },
            migration: 'safe',
        }
    });

    var createModel = function (opts) {
        var MyModel = models.loadSchema(opts.name, opts.schema);
        MyModel.syncDB(function (err, result) {
            if (err) throw err;
            console.log("Connected to cassandra database!");
        });
        return models.instance;
    }
    return {
        models: models.instance,
        createModel: createModel,
    };
};
module.exports = DB;