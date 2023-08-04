import axios from "axios";
import { ActionTypes } from "../../constants/actionTypes";
import { options } from "../../constants/constants";

// bütün atılan isteklerin başına eklenir
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// ! Senkron (normal) Aksiyon
// aksiyon objesi oluşturan bir fonksiyon
export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

//! Asenkron (Thunk) Aksiyon
// hem verileri çeksin hem reducer'a aktarsın
export const getMovies = () => {
  return async function (dispatch) {
    // veri çekme işlemleri
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      options
    )

   
    // gelen veriyi reducer'a aktarma
    dispatch({
      type: ActionTypes.SET_MOVIES,
      payload: res.data,
    });
  };
};



export const getGenres = () => (dispatch) => {
  // kategori verilerini çekecek
  axios
    .get("genre/movie/list?language=en", options)
    .then((res) =>
    // reducer a aktar
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err));
};

// Thunk Aksiyonun Kısa Yazımı
//export const kısaYazım = () => async (dispatch) => {
// veri çekme işlemleri
// gelen veriyi reducer'a aktarma
//}
