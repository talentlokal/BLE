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

    const servicesSection = data.services;
    document.getElementById('services-title').textContent = data.services.title;

    // Set services content
    data.services.items.forEach(item => {
      const service = document.getElementById(item.id);
      service.querySelector('img').src = item.image;
      service.querySelector('img').alt = item.alt;
      service.querySelector('p').textContent = item.title;
      service.querySelector('.rich-text-block').innerHTML = `<p>${item.description}</p>`;
      const link = service.querySelector('a');
      link.href = item.link;
      link.textContent = item.linkText;

    });

    const gallerySection = document.getElementById("gallery-section");
    const galleryTitle = document.getElementById("gallery-title");
    const galleryGrid = document.getElementById("gallery-grid");

    galleryTitle.innerText = "Gallerie";

    data.galleryImages.forEach(image => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("relative", "overflow-hidden", "aspect-w-3", "aspect-h-2");

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      img.classList.add("w-full", "h-full", "object-center", "object-cover", "rounded-sm", "md:rounded-md", "lg:rounded-lg");

      imageDiv.appendChild(img);
      galleryGrid.appendChild(imageDiv);
    });

    const aboutSection = data.aboutSection;
    document.querySelector('#section-title').innerText = aboutSection.sectionTitle;
    document.querySelector('#section-subtitle').innerText = aboutSection.sectionSubtitle;
    document.querySelector('#credo-title').innerText = aboutSection.credoTitle;
    document.querySelector('#credo-text').innerText = aboutSection.credoText;
    document.querySelector('#who-title').innerText = aboutSection.whoTitle;
    document.querySelector('#who-text').innerText = aboutSection.whoText;
    document.querySelector('#contact-title').innerText = aboutSection.contactTitle;
    document.querySelector('#phone-text').innerText = aboutSection.phoneText;
    document.querySelector('#phone-number').innerText = aboutSection.phoneNumber;
    document.querySelector('#phone-time').innerText = aboutSection.phoneTime;
    document.querySelector('#closing-text').innerText = aboutSection.closingText;

    document.querySelector('#bernhard-section').style.backgroundColor = data.bernhard.backgroundColor;
    document.querySelector('#bernhard-image').src = data.bernhard.image.src;
    document.querySelector('#bernhard-image').alt = data.bernhard.image.alt;
    document.querySelector('#bernhard-heading').innerText = data.bernhard.heading;
    document.querySelector('#bernhard-subheading').innerText = data.bernhard.subheading;

    document.querySelector('#contact-text h3').innerText = data.contact.title;
    document.querySelector('#contact-text p:nth-child(2)').innerText = data.contact.text1;
    document.querySelector('#contact-text p:nth-child(3)').innerText = data.contact.text2;
    document.querySelector('#contact-name').innerText = data.contact.name;
    document.querySelector('#contact-phone').innerText = data.contact.phone;
    document.querySelector('#contact-email').innerText = data.contact.email;
    document.querySelector('#contact-subject').innerText = data.contact.subject;
    document.querySelector('#contact-message').innerText = data.contact.message;
    document.querySelector('#contact-submit').innerText = data.contact.submit;
   /* todo document.querySelector('#contact-success').innerText = data.contact.success;
    document.querySelector('#contact-error').innerText = data.contact.error;
    document.querySelector('#contact-privacy').innerText = data.contact.privacy;
    document.querySelector('#contact-privacy-link-text').innerText = data.contact.privacyLinkText;
    document.querySelector('#contact-privacy-link').href = data.contact.privacyLinkHref;
*/




    document.querySelector('#footer-title').innerText = data.footer.title;
    const footerNav = document.querySelector('#footer-nav');
    data.footer.nav.forEach(item => {
      const li = document.createElement('li');
      li.className = 'border-b-2';
      const a = document.createElement('a');
      a.className = 'block py-1.5 font-light';
      a.href = item.url;
      a.textContent = item.text;
      li.appendChild(a);
      footerNav.appendChild(li);
    });
    document.querySelector('#footer-copyright').innerText = data.footer.copyright;

  }).catch(error => console.error(error));
};
