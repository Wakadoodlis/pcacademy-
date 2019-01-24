import axios from 'axios';

export const GET_PLACES = 'app/PlacesPage/GET_PLACES';

export const SET_PLACES = 'app/PlacesPage/SET_PLACES';

export const CREATE_PLACE = 'app/PlacesPage/CREATE_PLACE';

export const getPlaceFromAPI = async id => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
