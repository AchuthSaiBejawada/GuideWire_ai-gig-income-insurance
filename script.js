function triggerRain() {
  const result = document.getElementById("result");

  result.innerHTML = "🌧 Heavy Rain Detected!";

  setTimeout(() => {
    result.innerHTML = "⚡ Claim Triggered Automatically...";
  }, 1000);

  setTimeout(() => {
    result.innerHTML = "💰 ₹420 credited to your account!";
  }, 2000);
}