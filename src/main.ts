const video = document.querySelector("video")

if (video) {
  navigator.mediaDevices
    .getDisplayMedia({ video: true, audio: true })
    .then((stream) => (video.srcObject = stream))
    .catch((err) => console.log(err))
}

export default {}
