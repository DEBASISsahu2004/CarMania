// Configuration for API endpoints
const CONFIG = {
    // Automatically detect if running locally or on production
    API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'http://localhost:3000' 
        : 'https://car-mania-ivory.vercel.app',
    ENDPOINTS: {
        CONNECT_DB: '/connectdb',
        LOGIN: '/login',
        SIGNUP: '/signup',
        UPDATE_WISHLIST: '/update/wishlist',
        UPDATE_CART: '/update/cart',
        GET_FERRARI: '/get/ferrari',
        GET_ASTON_MARTIN: '/get/astonmartin',
        GET_MERCHANDISE: '/get/merchandise',
        GET_PARTS: '/get/parts'
    }
};

// Helper function to get full API URL
function getApiUrl(endpoint) {
    return CONFIG.API_BASE_URL + endpoint;
}
