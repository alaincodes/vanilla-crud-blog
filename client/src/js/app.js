const addPostBtn = document.getElementById("add-post-btn");
const addPostModal = document.getElementById("add-Post-Modal");
const closeModalBtn = document.getElementsByClassName("close-modal-btn")[0];

addPostBtn.addEventListener("click", () => {
  addPostModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  addPostModal.style.display = "none";
});

addPostModal.addEventListener("click", event => {
  if (event.target == addPostModal) {
    addPostModal.style.display = "none";
  }
});

fetch("http://localhost:3000/posts")
  .then(result => {
    return result.json();
  })
  .then(data => {
    // console.log(data);
    const PostGridSection = document.getElementById("post-container");
    let displayPost = "";
    data.forEach(post => {
      displayPost += `
      <div class="blog-post-card">
        <span class="close-btn">&times;</span>
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        <div class="footer-card">
          <button>read</button>
          <p class="edit-post">Edit..</p>
        </div>
      </div>
      `;
    });
    PostGridSection.innerHTML = displayPost;
  });
