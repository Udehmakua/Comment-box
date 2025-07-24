function countWords(textarea) {
  const words = textarea.value.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const wordLimit = 100;

  document.getElementById("wordCount").textContent = `${wordCount} / ${wordLimit} words`;
  const warning = document.getElementById("warning");

  if (wordCount > wordLimit) {
    warning.style.display = 'inline';
    textarea.style.borderColor = '#e63946';
  } else {
    warning.style.display = 'none';
    textarea.style.borderColor = '#ccc';
  }
}

document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const textarea = document.getElementById("commentInput");
  const words = textarea.value.trim().split(/\s+/).filter(Boolean);

  if (words.length > 100) {
    alert("❌ Your comment exceeds the 100-word limit.");
    return;
  }

  alert("✅ Comment submitted:\n" + textarea.value);
  textarea.value = "";
  countWords(textarea);
});
