const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['scylla-db'],
    keyspace: 'node_cassandra',
    localDataCenter:"datacenter1"
});

module.exports = client;