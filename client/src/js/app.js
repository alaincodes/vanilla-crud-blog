const addPostBtn = document.getElementById("add-post-btn");
const addPostModal = document.getElementById("add-Post-Modal");
const closeModalBtn = document.getElementsByClassName("close-modal-btn")[0];

// ADD POST MODAL

addPostBtn.addEventListener("click", () => {
  addPostModal.style.display = "block";
});

function closeModal() {
  closeModalBtn.addEventListener("click", () => {
    addPostModal.style.display = "none";
  });
}
closeModal();

addPostModal.addEventListener("click", event => {
  if (event.target == addPostModal) {
    addPostModal.style.display = "none";
  }
});

class Blog {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}

class UI {
  static addBlogToList(blog) {
    const list = document.querySelector("#post-container");

    const row = document.createElement("div");

    row.innerHTML = `
    <div class="blog-post-card">
    <span id="delete-post-btn" class="close-btn delete">&times;</span>
    <h2>${blog.title}</h2>
    <p>${blog.text}</p>
    <div class="footer-card">
      <button>read</button>
      <p class="edit-post">Edit..</p>
    </div>
  </div>
      `;

    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#post-title-value").value = "";
    document.querySelector("#post-text-value").value = "";
    addPostModal.style.display = "none";
  }

  static deleteBlog(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBlogs);

// Event: Add a Book
document.querySelector("#form-post").addEventListener("submit", e => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector("#post-title-value").value;
  const text = document.querySelector("#post-text-value").value;

  // Instatiate blog
  const blog = new Blog(title, text);

  // Add blog to UI
  UI.addBlogToList(blog);

  UI.clearFields();
});

document.querySelector("#post-container").addEventListener("click", e => {
  // Remove book from UI
  UI.deleteBlog(e.target);
});

// Fetch Blog Posts link

// fetch("http://localhost:3000/posts")
//   .then(result => {
//     return result.json();
//   })
//   .then(data => {
//     const PostGridSection = document.getElementById("post-container");
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
