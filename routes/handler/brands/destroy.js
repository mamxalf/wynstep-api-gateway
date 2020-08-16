const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_BRAND
} = process.env;

const api = apiAdapter(URL_SERVICE_BRAND);

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const brands = await api.delete(`/api/brand/${id}`);
        return res.json(brands.data);

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