import { AUTHENTICATED, NOT_AUTHENTICATED } from '.'

const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const thirtyMinutes = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
  if (timeSinceLastLogin < thirtyMinutes) {
    return localStorage.getItem("token");
  }
};

const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
}

export const signupUser = (credentials) => {
    return (dispatch) => {
      return fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: credentials })
      }).then((res) => {
        if (res.ok) {
          setToken(res.headers.get("Authorization"));
          return res
            .json()
            .then((userJson) => {
              const normalizedUser = { email: userJson.email || userJson.data.email };
              dispatch({ type: AUTHENTICATED, payload: normalizedUser });
        });
        } else {
          return res.json().then((errors) => {
            dispatch({ type: NOT_AUTHENTICATED });
            return Promise.reject(errors);
          });
        }
      });
    };
  };

  export const loginUser = (credentials) => {
    return (dispatch) => {
      return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: credentials }),
      }).then((res) => {
        if (res.ok) {
          setToken(res.headers.get("Authorization"));
          return res.json().then((userJson) => {
            const normalizedUser = { email: userJson.email || userJson.data.email };
            dispatch({ type: AUTHENTICATED, payload: normalizedUser });
          });
        } else {
          return res.json().then((errors) => {
            dispatch({ type: NOT_AUTHENTICATED });
            // Here you can also dispatch another action to store the error messages in Redux store if needed.
            return Promise.reject(errors);
          });
        }
      });
    };
  };
  

export const logoutUser = () => {
return (dispatch) => {
    return fetch("http://localhost:3000/logout", {
    method: "DELETE",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: getToken(),
    },
    }).then((res) => {
    if (res.ok) {
        removeToken();
        return dispatch({ type: NOT_AUTHENTICATED });
    } else {
        return res.json().then((errors) => {
        dispatch({ type: NOT_AUTHENTICATED });
        return Promise.reject(errors);
        });
    }
    });
};
};

export const checkAuth = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/current_user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: getToken()
      }
    }).then((res) => {
      if (res.ok) {
        return res.json().then(user => dispatch({type: AUTHENTICATED, payload: user}))
      } else {
        return Promise.reject(dispatch({type: NOT_AUTHENTICATED}))
      }
    });
  };
};

