exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply('Default homepage');
        }
    });

    next();
};

exports.register.attributes = {
    name: 'default',
    version: '1.0.0'
};
