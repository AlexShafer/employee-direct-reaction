import axios from "axios";

export default {
    getEmployeeData: function () {
        return axios.get("https://randomuser.me/api?results=20").then((res) => {
            const employees = res.data.results;
            return employees.map((employee) => {
                return {
                    image: employee.picture.thumbnail,
                    name: employee.name.first + " " + employee.name.last,
                    country: employee.location.country,
                    email: employee.email
                };
            });
        });
    }
};