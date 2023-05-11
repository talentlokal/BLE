window.onload = function() {
fetch('content/index/index.json')
  .then(response => response.json())
  .then(data => {
        const landingSection = data.landingSection;

        document.querySelector('.landing-section').style.backgroundImage = `url('${landingSection.backgroundImage}')`;
        document.querySelector('#landing-section-headline').innerText = landingSection.headline;
        document.querySelector('.landing-section-text-body').innerText = landingSection.text;
        const ctaButton = document.querySelector('#landing-section-cta-button');
        ctaButton.innerText = landingSection.buttonText;
        ctaButton.href = landingSection.buttonHref;




      });
};
