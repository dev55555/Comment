function addComment() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const commentText = document.getElementById("comment").value;

    if (commentText.trim() === "" || name.trim() === "" || email.trim() === "") {
        alert("Please fill in all the details.");
        return;
    }

    const comment = createComment(name, email, commentText);
    const commentsContainer = document.getElementById("comments");
    commentsContainer.appendChild(comment);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
}

function createComment(name, email, commentText) {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";

    const commentHeader = document.createElement("div");
    commentHeader.className = "comment-header";
    commentHeader.innerHTML = `
        <span class="comment-name">${name}</span>
        <span class="comment-email">${email}</span>
    `;

    const commentContent = document.createElement("div");
    commentContent.className = "comment-content";
    commentContent.textContent = commentText;

    commentDiv.appendChild(commentHeader);
    commentDiv.appendChild(commentContent);

    return commentDiv;
}
