import http from "../http-common";

class JournalDataService {
  getAllPeople() {
    return http.get("people");
  }

  addPerson(data) {
    return http.post("person-add", data);
  }

  getAllLocations() {
    return http.get("locations");
  }

  addLocation(data) {
    return http.post("location-add", data);
  }

  updateLocation(data) {
    return http.put("location-edit", data);
  }

  getScenarios() {
    return http.get("scenarios");
  }

  getScenario(id) {
    return http.get(`scenario?id=${id}`);
  }

  addEntry(data) {
    return http.post(`entry-add`, data);
  }

  getEntry(id) {
    return http.get(`entry?id=${id}`);
  }

  getEntries(query, perPage = 20, page = 0, sort = "descending") {
    return http.get(
      `entries?entriesPerPage=${perPage}&sort=${sort}&page=${page}${
        query ? "&" + query.type + "=" + query.search : ""
      }`
    );
  }

  addAnswer(data) {
    return http.post(`answer-add`, data);
  }

  editEntry(data) {
    return http.put("entry-edit", data);
  }
  //   // name zipcode or quisine
  //   find(query, by = "name", page = 0) {
  //     return http.get(`restaurants?${by}=${query}&page=${page}`);
  //   }

  //   createReview(data) {
  //     return http.post("/review-new", data);
  //   }

  //   updateReview(data) {
  //     return http.put("/review-edit", data);
  //   }

  //   deleteReview(id, userId) {
  //     return http.delete(`/review-delete?id=${id}`, {
  //       data: { user_id: userId },
  //     });
  //   }

  //   getCuisines(id) {
  //     return http.get(`/cuisines`);
  //   }
}

export default new JournalDataService();
