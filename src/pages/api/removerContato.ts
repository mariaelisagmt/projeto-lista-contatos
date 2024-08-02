import axios from 'axios';

export const removeContato = async (id: number) : Promise<void> => {
  try {    
    await axios.delete(`http://localhost:18000/contato/remover/${id}`);
  } catch (error) {
    console.error('Erro ao remover contato:', error);
    throw error;
  }
};