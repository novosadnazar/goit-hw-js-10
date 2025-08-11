const videObserver = new IntersectionObserver(([entri]) => {
  console.log(entri.target);
  const video = entri.target;

  if (video.currentTime === 0) {
    return;
  }
  if (!entri.isIntersecting || entri.intersectionRatio <= 0.2) {
    video.pause();
  }
  if (entri.isIntersecting) {
    video.play();
  }
}, {
    threshold: [0.2, 0.8],
});

document.querySelectorAll(".video").forEach((item) => videObserver.observe(item))