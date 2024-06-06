// Example of dynamically adding blog posts
const blogSection = document.getElementById("blog");

const blogPosts = [
    {
        title: "Understanding STIs: Symptoms and Treatment",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac maximus turpis. Nulla facilisi. Sed auctor lorem eget mauris tempor, vel vehicula justo fringilla."
    },
    {
        title: "Tips for Safe Sex: Protect Yourself and Your Partner",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac maximus turpis. Nulla facilisi. Sed auctor lorem eget mauris tempor, vel vehicula justo fringilla."
    },
  
];

blogPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
    `;
    blogSection.appendChild(postElement);
});


