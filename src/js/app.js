const addPost = document.getElementById("add-post-btn");
const addPostModal = document.getElementById("add-Post-Modal");
const closeModalBtn = document.getElementsByClassName("close-modal-btn")[0];

addPost.addEventListener("click", () => {
  addPostModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  addPostModal.style.display = "none";
});

addPostModal.onclick = function(event) {
  if (event.target == addPostModal) {
    addPostModal.style.display = "none";
  }
};
