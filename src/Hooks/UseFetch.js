import axios from "axios";
import { ACTIONS } from "../Constant/Actions";

function UseFetch(url, dispatch) {
  axios
    .get(url)
    .then((response) => {
      dispatch({ type: ACTIONS.SEARCH, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: ACTIONS.ERROR, payload: error.response });
    });
}
export default UseFetch;

// import axios from "axios";
// import { useEffect } from "react";
// import { ACTIONS } from "../Constant/Actions";

// function UseFetch(url, dispatch) {
//   console.log(url, dispatch);
//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         dispatch({ type: ACTIONS.SEARCH, payload: response.data });
//       })
//       .catch((error) => {
//         console.log(error);;
//       })
//   }, [url]);
// }
