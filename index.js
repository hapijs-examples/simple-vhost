'use strict';

const Glue = require('glue');
const Hoek = require('hoek');

const manifest = require('./sites/manifest.json');

const options = {
    relativeTo: __dirname
};

Glue.compose(manifest, options, (err, server) => {

    Hoek.assert(!err, err);
    server.start((err) => {

        Hoek.assert(!err, err);
        console.log('Server running on port:', server.info.port);
    });
});
