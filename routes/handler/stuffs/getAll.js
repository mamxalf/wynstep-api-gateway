const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_STUFF
} = process.env;

const api = apiAdapter(URL_SERVICE_STUFF);

module.exports = async (req, res) => {
    try {
        const stuffs = await api.get('/stuffs');
        
        return res.json(stuffs.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'service unavailable'
            });
        }

        const { status, data } = error.response;

        return res.status(status).json(data);
    }
}