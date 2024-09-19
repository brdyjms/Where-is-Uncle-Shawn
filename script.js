let currentSection = 0;
    const totalSections = document.querySelectorAll('.sections').length;

    function handleScroll(event) {
      // Normalize wheel delta across different browsers
      const delta = event.wheelDelta || -event.deltaY || -event.detail;

      if (delta > 0 && currentSection > 0) {
        currentSection--;
      } else if (delta < 0 && currentSection < totalSections - 1) {
        currentSection++;
      }

      scrollToSection(currentSection);
    }

    function scrollToSection(sectionIndex) {
      const targetSection = document.querySelectorAll('.sections')[sectionIndex];
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }

    document.addEventListener('wheel', handleScroll);