const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_BRAND
} = process.env;

const api = apiAdapter(URL_SERVICE_BRAND);

module.exports = async (req, res) => {
    try {
        const brands = await api.get('/api/brand-media');
        return res.json(brands.data);

        // const mentors = await api.get('/api/mentors');
        // return res.json(mentors.data);
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