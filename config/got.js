import axios from 'axios';

export const peticionApi = async (url) => {
  try {
    const response = await axios(url);
    return response;
  } catch (error) {
    console.error('Error en la solicitud a la API:', error);
    throw error; 
  }
};
