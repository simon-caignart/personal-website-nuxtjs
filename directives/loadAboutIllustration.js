export default {
  inserted: (el) => {
    function loadImage() {
      const meImg = document.getElementById("meImg");
      const hobbiesImg = document.getElementById("hobbiesImg");

      if (el.dataset.url == "/me coding.png") {
        hobbiesImg.classList.add("animate-fadeOutFast");
        setTimeout(() => {
          meImg.classList.replace(
            "animate-fadeOutFast",
            "animate-fadeInFast"
          );
        }, 300);
        setTimeout(() => {
          meImg.classList.remove("animate-fadeInFast");
        }, 600);
      } else if (el.dataset.url == "/pullups.png") {
        meImg.classList.add("animate-fadeOutFast");
        setTimeout(() => {
          hobbiesImg.classList.replace(
            "animate-fadeOutFast",
            "animate-fadeInFast"
          );
        }, 300);
        setTimeout(() => {
          hobbiesImg.classList.remove("animate-fadeInFast");
        }, 600);
      }

      setTimeout(() => {
      while (
        !meImg.classList.contains("animate-fadeOutFast") &&
        !hobbiesImg.classList.contains("animate-fadeOutFast")
      ) {
        if (el.dataset.url == "/simon caignart.png") {
          hobbiesImg.classList.add("animate-fadeOutFast");
        } else if (el.dataset.url == "/pullups.png") {
          meImg.classList.add("animate-fadeOutFast");
        }
      }}, 300);
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0.8",
      };

      const observer = new IntersectionObserver(handleIntersect, options);

      observer.observe(el); // target element to watch
    }

    if (!window["IntersectionObserver"]) {
      loadImage();
    } else {
      createObserver();
    }
  },
};
