import axios from 'axios';

export const getContato = async () => {
  try {
    const response = await axios.get('http://localhost:18000/contato'); 
    return response.data;
  } catch (error) {
    console.error('Erro ao obter contato:', error);
    throw error;
  }
};
