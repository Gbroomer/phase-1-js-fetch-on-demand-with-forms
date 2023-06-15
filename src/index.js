const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("searchByID");
    let h4 = document.querySelector("#movieDetails h4");
    let p = document.querySelector("#movieDetails p")
    console.log(p)
    fetch(`http://localhost:3000/movies${input.value}`)
        .then((resp) => {
            return resp.json()})
        .then((data) => {
            console.log(data);
            if (data.id) {
                h4.textContent = data.title
                p.textContent = summary.title
            }})
        .catch((err) => {
            console.log(err);
     
        })
  })
}

document.addEventListener('DOMContentLoaded', init);