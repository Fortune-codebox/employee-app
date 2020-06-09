// import Vue from "vue";
import {
    GET_ALL_EMPLOYEES,
    DELETE_EMPLOYEE,
    CREATE_EMPLOYEE,
    GET_EMPLOYEE,
    UPDATE_EMPLOYEE
  } from "../actions";
  
  import {SET_ALL_EMPLOYEES, SET_EMPLOYEE} from "../mutations";
  import {ApiService} from "../../handler";
  
  const initialState = {
    employees: {},
    employee: {}
  };
  
  
  
  export const state = {...initialState};
  
  const actions = {
    async [GET_ALL_EMPLOYEES](context) {
      const {data} = await ApiService.query('/employees');
      context.commit(SET_ALL_EMPLOYEES, data.data)
      return data;
    },
    async[DELETE_EMPLOYEE] (context, payload) {
      await ApiService.delete('/employees/' + payload);
    },
    async[CREATE_EMPLOYEE] (context, payload) {
      await ApiService.post('/employees', payload);
    },
    async[GET_EMPLOYEE] (context, payload) {
     const {data} = await ApiService.query('/employees/' + payload);
     context.commit(SET_EMPLOYEE, data.data);
     return data;
    },
    async[UPDATE_EMPLOYEE] (context, payload) {
      const {data} = await ApiService.put('/employees/'+payload.employee_id, payload);
    return data;
    }
  
  };
  
  
  export const mutations = {
    [SET_ALL_EMPLOYEES](state, employees) {
      state.employees = employees;
    },
    [SET_EMPLOYEE] (state, employee) {
      state.employee = employee;
    }
  //   [RESET_STATE]() {
  //     for (let f in state) {
  //       Vue.set(state, f, initialState[f]);
  //     }
  //   }
  };
  const getters = {
    employees(state) {
      return state.employees;
    },
    employee(state) {
      return state.employee;
    }
  
  };
  
  export default {
    state,
    actions,
    mutations,
    getters
  };
  