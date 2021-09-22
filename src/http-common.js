import axios from "axios";

export default axios.create({
  baseURL:
    "https://webhooks.mongodb-realm.com/api/client/v2.0/app/journal-app-ckmof/service/Journal/incoming_webhook/",
  // baseURL: "https://webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-wzbtk/service/Restaurants/incoming_webhook/",
  headers: {
    "Content-Type": "application/json",
  },
});
