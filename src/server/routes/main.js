async function main(_req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.render('main', { public: this.c.public, title: this.c.title });
}
module.exports = main;
