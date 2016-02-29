exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply('Dogs homepage');
        }
    });

    next();
};

exports.register.attributes = {
    name: 'dogs',
    version: '1.0.0'
};
