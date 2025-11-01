const fetch = require('node-fetch');

exports.handler = async (event) => {
  const path = event.path.replace('/.netlify/functions/proxy', '') || '/';
  const url = `https://protected-roblox-scripts.onrender.com${path}`;

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Roblox/WinInet' }
    });
    const text = await response.text();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/plain' },
      body: text
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Lỗi: ${error.message}`
    };
  }
};
