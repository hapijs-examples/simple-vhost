exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply('Cats homepage');
        }
    });

    next();
};

exports.register.attributes = {
    name: 'cats',
    version: '1.0.0'
};
