/*
  script.js
  Simple scroll reveal using IntersectionObserver.
  Sections fade in when they reach a certain part of the screen,
  and fade out when they leave that zone.
*/

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");

  // If the browser doesn't support IntersectionObserver, just show everything.
  if (!("IntersectionObserver" in window)) {
    sections.forEach((s) => s.classList.add("in-view"));
    return;
  }

  /*
    rootMargin controls the "zone" where we consider a section active.
    Negative margins shrink the observer area so the section only triggers
    when it is more centered in the viewport (feels nicer).
  */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: "-15% 0px -15% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
});
