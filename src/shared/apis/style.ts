import { apiInstance } from '@shared/apis/instance';

export const getStyleCategories = async () => {
  try {
    const response = await apiInstance.get('/style-analysis')
    console.log(response.data)
    return response.data;
  } catch ( error ) {
    console.error( error );
  }
}
