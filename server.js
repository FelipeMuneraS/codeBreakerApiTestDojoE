const server = require('./app/app');
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server running CodeBreaker API on port %d', port);
});