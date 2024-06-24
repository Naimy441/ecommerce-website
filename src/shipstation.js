import axios from 'axios';

const apiKey = 'YOUR_SHIPSTATION_API_KEY';
const apiSecret = 'YOUR_SHIPSTATION_API_SECRET';

const createShipment = async (shipmentData) => {
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  const response = await axios.post('https://ssapi.shipstation.com/shipments', shipmentData, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  return response.data;
};

export { createShipment };
