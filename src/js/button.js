const buttonText = document.querySelector(".btn_text");

let isTextVisible = false;

const toggleButtonText = () => {
  isTextVisible = !isTextVisible; // Toggle the state

  if (isTextVisible) {
    buttonText.textContent = "haha, just kidding!";
  } else {
    buttonText.textContent = ""; // Empty text to hide it
  }
};
