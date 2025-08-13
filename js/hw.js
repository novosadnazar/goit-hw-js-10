const boxObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((element) => {
      if (element.isIntersecting) {
        const img = element.target.querySelector("img");
        const text = element.target.querySelector(".text");

        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add("loaded");
          text.classList.add("loaded"); // з’являється разом
        };

        observer.unobserve(element.target);
      }
    });
  },
  {
    rootMargin: "15px",
  }
);

document.querySelectorAll(".box").forEach((item) => boxObserver.observe(item));



