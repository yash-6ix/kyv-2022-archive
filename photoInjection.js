const image = document.createElement("img");
const candidateInfoTags = document.getElementsByClassName("candidate-info");
[...candidateInfoTags].forEach((cit) => {
  const candidateName =
    cit.getElementsByClassName("candidate-name")[0].innerText;
  let candidatePhotoTag = null;
  let width = 0;
  let height = 0;
  if (cit.getElementsByClassName("candidate-photo-big").length > 0) {
    candidatePhotoTag = cit.getElementsByClassName("candidate-photo-big")[0];
    width = 205;
    height = 260;
  } else if (cit.getElementsByClassName("candidate-photo-medium").length > 0) {
    candidatePhotoTag = cit.getElementsByClassName("candidate-photo-medium")[0];
    width = 110;
    height = 140;
  } else {
    candidatePhotoTag = cit.getElementsByClassName("candidate-photo-small")[0];
    width = 68;
    height = 85;
  }
  image.setAttribute("width", width);
  image.setAttribute("height", height);
  image.style.position = "absolute";

  const photoPath = `./Photos/${candidateName}.png`;
  fetch(photoPath, { method: "HEAD" })
    .then((res) => {
      if (res.ok) {
        image.setAttribute("src", photoPath);
        candidatePhotoTag.removeChild(candidatePhotoTag.firstElementChild);
        candidatePhotoTag.appendChild(image.cloneNode(true));
      } else {
      }
    })
    .catch((err) => console.log("Error:", err));
});
