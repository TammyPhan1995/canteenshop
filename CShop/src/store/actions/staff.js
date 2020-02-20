//This class impl staff actions
import * as actionTypes from "./actionTypes";
import axios from "../../axios-manager";

//Get staffs
export const getStaffsSuccess = (data, total, page, sizePerPage) => {
  return {
    type: actionTypes.GET_STAFF_SUCCESS,
    total: total,
    data: data,
    page: page,
    sizePerPage: sizePerPage
  };
};

export const getStaffsFail = error => {
  return {
    type: actionTypes.GET_STAFF_FAILED,
    error: error
  };
};

export const getStaffsStart = () => {
  return {
    type: actionTypes.GET_STAFF_START
  };
};

export const updateStaffStart = () => {
  return {
    type: actionTypes.UPDATE_STAFF_START
  };
};
export const updateStaffFail = error => {
  return {
    type: actionTypes.UPDATE_STAFF_FAILED,
    error: error
  };
};
export const updateStaffSuccess = () => {
  return {
    type: actionTypes.UPDATE_STAFF_SUCCESS
  };
};


export const addStaffStart = () => {
  return {
    type: actionTypes.ADD_STAFF_START
  };
};
export const addStaffFail = error => {
  return {
    type: actionTypes.ADD_STAFF_FAILED,
    error: error
  };
};
export const addStaffSuccess = () => {
  return {
    type: actionTypes.ADD_STAFF_SUCCESS
  };
};




export const getStaffs = (page, size, search) => {
  return dispatch => {
    dispatch(getStaffsStart());
    let url = "/appUsers?userType=STAFF";
    if (search) {
      url += "&page=" + page + "&size=" + size + "&name=" + search;
    } else {
      url += "&page=" + page + "&size=" + size;
    }
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then(response => {
        dispatch(
          getStaffsSuccess(
            response.data.content,
            response.data.totalElements,
            page,
            size
          )
        );
      })
      .catch(error => {
        dispatch(getStaffsFail(error));
      });
  };
};

export const updateStaff = (staffId, isActive) => {
  console.log("update");
  return dispatch => {
    let url =
      "/appUsers/active/" + staffId + "?userType=STAFF&isActive=" + isActive;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then(response => {
        dispatch(updateStaffSuccess());
      })
      .catch(error => {
        dispatch(getStaffsFail(error));
      });
  };
};

export const addStaff = (data) => {

  return dispatch => {
    dispatch(addStaffStart())
    axios.post('staffs/', data, { headers: { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` } })
      .then(response => {
        dispatch(addStaffSuccess())
      })
      .catch(error => {
        console.log(error.response.data)
        dispatch(addStaffFail(error.response.data))
      });
  }
}
