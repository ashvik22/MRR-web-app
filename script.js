function submitName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      alert(`Thank you for joining, ${name}!`);
      // You can replace this alert with actual form submission logic
    } else {
      alert("Please enter your name to continue.");
    }
  }
  