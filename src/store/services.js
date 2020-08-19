import axios from "axios"
const plugin11 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7307/storyboard/8491/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function plugin11_get__list() {
  return plugin11.get(`/`)
}
export const apiService = { plugin11_get__list }
