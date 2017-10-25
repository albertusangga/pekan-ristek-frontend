const config = {
  production: {
    API_URL: 'http://ristek.cs.ui.ac.id/pr-api',
  },
  development: {
    API_URL: 'http://ristek.cs.ui.ac.id/pr-api',
  },
  local: {
    API_URL: 'http://localhost:8000/pr-api',
  },
};

export default config[process.env.NODE_ENV || 'production'];
