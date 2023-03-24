// smooth scrolling for same-page anchors - start
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
// smooth scrolling for same-page anchors - end

// swiper setup start
// swiper element
const swiperEl_web3 = document.querySelector('swiper-container#web3');
const swiperEl_paysys = document.querySelector('swiper-container#paysys');

// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 20,
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    740: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1320: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};
const swiperParams_short = {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 20,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    505: {
      slidesPerView: 2,
    },
    670: {
      slidesPerView: 3,
    },
    840: {
      slidesPerView: 4,
    },
    1010: {
      slidesPerView: 5,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl_web3, swiperParams_short);
Object.assign(swiperEl_paysys, swiperParams);

// and now initialize it
swiperEl_web3.initialize();
swiperEl_paysys.initialize();
// swiper setup end

// textarea form setup start
const tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + tx[i].scrollHeight + 'px;overflow-y:hidden;');
  tx[i].addEventListener('input', OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = this.scrollHeight + 'px';
}
// textarea form setup end

// form logic start
const input_name = document.querySelector('.field_1');
const input_contact = document.querySelector('.field_2');
const input_message = document.querySelector('.field_3');
const form_btn = document.querySelector('.contactForm_btn');

const formData = {
  'name': '',
  'contact': '',
  'message': '',
}
const validate = (obj) => {
  const keys = Object.keys(obj);
  const valid_val = keys.map(el => obj[el] !== '')
  const valid_out = valid_val.filter(el => el == '')
  return valid_out.length > 0 ? false : true;
}

input_name.addEventListener('input', (e) => {
  formData.name = e.target.value;
});
input_contact.addEventListener('input', (e) => {
  formData.contact = e.target.value;
});
input_message.addEventListener('input', (e) => {
  formData.message = e.target.value;
});
form_btn.addEventListener('click', (e) => {
  console.log(validate(formData));
  validate(formData) == true ? console.log('all clear') : console.log('form was not filled correctly');
})
// form logic end