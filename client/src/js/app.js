const addPostBtn = document.getElementById("add-post-btn");
const addPostModal = document.getElementById("add-Post-Modal");
const closeModalBtn = document.querySelector(".close-modal-btn");

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

const storePosts = [
  {
    title: "First Post",
    content: "Hello im teaching you how to cook"
  },
  {
    title: "Second Post",
    content: "how  to build a heavyweight career while sleeping"
  }
];

const addPost = function(title, content) {
  storePosts.push({
    title: title,
    content: content
  });
};

const postBtn = document.querySelector("#addPostContent");
postBtn.addEventListener("click", () => {
  addPostValue();
});

const addPostValue = function() {
  let addPostTitle = document.querySelector("#post-title-value").value;
  let addPostContentValue = document.querySelector("#post-text-value").value;
  addPost(addPostTitle, addPostContentValue);
  addPostTitle.value = "";
  addPostContentValue.value = "";
  displayPost(); // not working, flashing for 1s..
};

const displayPost = function() {
  const postContainer = document.querySelector("#post-container");
  let para = "";
  storePosts.forEach((post, index) => {
    para += `
      <div class="blog-post-card">
        <span class="close-btn">&times;</span>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <button class="delete-btn" id="${index}">Delete</button>
      </div>
    `;
  });
  postContainer.innerHTML = para;
};

displayPost();

const deleteBtn = document.querySelectorAll('.delete-btn');
deleteBtn.addEventListener('click', (index) => {
  storePosts.splice(index, 1);
})


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
