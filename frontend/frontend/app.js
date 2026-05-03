async function sendData() {
  const name = document.getElementById("name").value;

  const res = await fetch("http://localhost:3000/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  });

  const data = await res.json();

  document.getElementById("result").innerText = data.message;
}
