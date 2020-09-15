import express from 'express';
import bodyParser from 'body-parser';

const Server = {
    start() {
        const app = express();
        const port = 9000;
        const www = './public';

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.static(www));
        app.get('*', (req, res) => res.sendFile(`index.html`, { root: www }));
        app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
    }
}

export default Server;