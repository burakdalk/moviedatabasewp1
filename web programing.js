document.addEventListener("DOMContentLoaded", function () {
    const commentButtons = document.querySelectorAll(".photo-item button");
  
    // Yorumları localStorage'dan yükle ve göster
    const comments = JSON.parse(localStorage.getItem("filmComments")) || {};
    Object.keys(comments).forEach((filmId) => {
      const commentsDisplay = document.getElementById(`comments-${filmId}`);
      comments[filmId].forEach((comment) => {
        const commentElement = document.createElement("p");
        commentElement.textContent = comment;
        commentsDisplay.appendChild(commentElement);
      });
    });
  
    commentButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const textArea = this.previousElementSibling;
        const comment = textArea.value.trim();
        const filmId = `film${index + 1}`;
  
        if (comment) {
          if (!comments[filmId]) {
            comments[filmId] = [];
          }
          comments[filmId].push(comment);
          localStorage.setItem("filmComments", JSON.stringify(comments));
  
          // Yorumları güncelle
          const commentsDisplay = document.getElementById(`comments-${filmId}`);
          const commentElement = document.createElement("p");
          commentElement.textContent = comment;
          commentsDisplay.appendChild(commentElement);
  
          textArea.value = ""; // Alanı temizle
          alert(`Comment for Film ${index + 1} has been successfully saved!`);
        } else {
          alert("Please write a comment before submitting.");
        }
      });
    });
  });
  