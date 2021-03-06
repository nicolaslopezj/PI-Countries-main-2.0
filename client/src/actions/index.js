import axios from 'axios';

export function getCountries() {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001');

    return dispatch({
      type: 'GET_COUNTRIES',
      payload: json.data,
    });
  };
}

export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        'http://localhost:3001/countries?name=' + name
      );

      console.log(json.data);

      return dispatch({
        type: 'GET_COUNTRIES_NAME',
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    var json = await axios.get('http://localhost:3001/countries/' + id);

    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data,
    });
  };
}

// export function addActivity(payload) {
//   return async function (dispatch) {
//     var json = await axios.post("http://localhost:3001/activity", payload);

//     // return json
//     return dispatch({
//       type: "POST_ACTIVITY",
//       payload: json.data,
//     });
//   };
// }

export const addActivity = (dataAct) => {
  return function (dispatch) {
    return axios.post(`http://localhost:3001/activity`, dataAct).then((res) => {
      dispatch({ type: 'POST_ACTIVITY', payload: res.data });
    });
  };
};

export function getActivities() {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/activity/');

    dispatch({
      type: 'GET_ACTIVITIES',
      payload: json.data,
    });
  };
}

export function getCountriesId(id) {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/countries/' + id);

    dispatch({
      type: 'GET_COUNTRIES_DETAIL',
      payload: json.data,
    });
  };
}

export function filterCountriesContinent(payload) {
  // return async function (dispatch) {
  // var json = await axios.get("http://localhost:3001/countries");

  return {
    type: 'FILTER_BY_CONTINENT',
    payload,
  };
  // };
}

export function setCountriesSort(payload) {
  // return async function (dispatch) {
  // var json = await axios.get("http://localhost:3001/countries");

  return {
    type: 'SET_SORT',
    payload: {
      asc: payload,
    },
  };
  // };
}

// export function deleteActivity(id) {
//   return async function (dispatch) {
//       var json = await axios.delete("http://localhost:3001/activity/" + id);

//       dispatch({
//         type: "DELETE_ACTIVITY",
//         payload: json.data
//       });
//   }
// }

// export function postActivity(payload) {
//   return async (dispatch) => {
//       var json = await axios.post("http://localhost:3001/activity", payload);
//       console.log(json)

//       return json
//       // dispatch({
//       //   type: "POST_ACTIVITY",
//       //   payload: json.data
//       // });
//   };
// }
