import axios from "axios";

const $host = axios.create({
    baseURL: "https://localhost:44378/"
})

export {
    $host
}
