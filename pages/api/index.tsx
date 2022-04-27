import request from 'services/api';

export const getSampleDetail = async (id: string) => {
  try {
    const { data } = await request.get(`sample`, {
      params: {
        id: id,
      },
    });
    return data;
  } catch {
    console.error;
  }
};
