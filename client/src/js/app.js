const addPostBtn = document.getElementById("add-post-btn");
const addPostModal = document.getElementById("add-Post-Modal");
const closeModalBtn = document.getElementsByClassName("close-modal-btn")[0];

// ADD POST MODAL

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

// Fetch Blog Posts link

// fetch("http://localhost:3000/posts")
//   .then(result => {
//     return result.json();
//   })
//   .then(data => {
//     const PostGridSection = document.querySelector("#post-container");
//     let displayPost = "";
//     data.forEach(post => {
//       displayPost += `
//       <div class="blog-post-card">
//         <span id="close-btn" class="close-btn">&times;</span>
//         <h2>${post.title}</h2>
//         <p>${post.description}</p>
//         <div class="footer-card">
//           <button>read</button>
//           <p class="edit-post">Edit..</p>
//         </div>
//       </div>
//       `;
//     });
//     PostGridSection.innerHTML = displayPost;
//   })
//   .catch(error => {
//     console.log("error !!!");
//     console.error(error);
//   });

// async function getBlogPosts() {
//   try {
//     const response = await fetch("http://localhost:3000/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error !!!");
//   }
// }
