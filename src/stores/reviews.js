import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: [],
    editedData: {
      editable: false,
      item: null,
    },
  }),
  actions: {
    async addReview(review) {
      const response = await fetch(`http://localhost:5000/reviews/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
      const newReview = await response.json();
      console.log(newReview);
      this.reviews = [newReview, ...this.reviews];
    },
  },
});
