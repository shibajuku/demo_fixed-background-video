const pauseButton = document.querySelector(".js-pause");
const captionButton = document.querySelector(".js-caption");
const video = document.querySelector("video");

pauseButton.addEventListener("click", (e) => {
  const icon = e.currentTarget.querySelector(".material-symbols-outlined");
  const label = e.currentTarget.querySelector("[data-visually-hidden]");

  if (video.paused) {
    video.play();
    icon.innerText = "pause_circle";
    label.innerText = "一時停止";
  } else {
    video.pause();
    icon.innerText = "play_circle";
    label.innerText = "再生";
  }
});

captionButton.addEventListener("click", (e) => {
  if (!video.textTracks) {
    return;
  }

  for (var i = 0; i < video.textTracks.length; i++) {
    if (video.textTracks[i].kind === "captions") {
      video.textTracks[i].mode = video.textTracks[i].mode === "showing" ? "hidden" : "showing";
      break;
    }
  }
});
