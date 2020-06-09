import {mapGetters} from "vuex";
import {GET_ALL_EMPLOYEES, DELETE_EMPLOYEE} from "../../../store/actions";


export default {
    data() {
        return {
           loading: false
        }
    },
    methods: {
        getAllEmployees() {
            this.loading = true;
            this.$store.dispatch(GET_ALL_EMPLOYEES).then(
                () => {
                    this.loading = false;
                }
            );
        },
        deleteEmployee(id) {
            alert("you are deleting this employee with id:" + id);
              this.$store.dispatch(DELETE_EMPLOYEE, id).then(
                  () => {
                      this.getAllEmployees();
                  }
              )
        },
        editEmployee(id) {  
            this.$router.push({name: 'edit-employee', params:{employeeId:id, editing: true}})
        }
    },
    computed: {
      ...mapGetters(['employees'])
    },
    mounted() {
        this.getAllEmployees();
    }
}
