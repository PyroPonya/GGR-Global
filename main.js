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
const swiperEl_license_desk = document.querySelector('swiper-container#license_desk') || '';
const swiperEl_license_mob = document.querySelector('swiper-container#license_mob') || '';

// swiper parameters
const swiperParams_paysys = {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 20,
  breakpoints: {
    390: {
      slidesPerView: 1.35,
    },
    495: {
      slidesPerView: 1.75,
    },
    580: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.5,
    },
    830: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 3.25,
    },
    1000: {
      slidesPerView: 3.5,
    },
    1090: {
      slidesPerView: 4,
    },
    1160: {
      slidesPerView: 4.25,
    },
    1340: {
      slidesPerView: 5,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};
const swiperParams_web3 = {
  slidesPerView: 2,
  freeMode: true,
  spaceBetween: 20,
  breakpoints: {
    375: {
      slidesPerView: 2.75,
    },
    505: {
      slidesPerView: 3.45,
    },
    670: {
      slidesPerView: 3.85,
    },
    840: {
      slidesPerView: 4.55,
    },
    990: {
      slidesPerView: 5,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};
const swiperParams_license_desk = {
  // slidesPerView: 1,
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.btn_next',
    prevEl: '.btn_prev',
  },
  breakpoints: {
    60: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 1.1,
    },
    870: {
      slidesPerView: 1.3,
    },
    940: {
      slidesPerView: 1.4,
    },
    1010: {
      slidesPerView: 1.5,
    },
    1260: {
      slidesPerView: 1.8,
    },
    1410: {
      slidesPerView: 2.15,
    },
  },
  on: {
    init() {
      // ...
    },
    // reachBeginning() {
    //   this.navigation.prevEl[0].classList.add('btn_disabled');
    // },
    // reachEnd() {
    //   this.navigation.nextEl[0].classList.add('btn_disabled');
    // },
    // slideChange() {
    //   if (this.realIndex !== 0 && this.realIndex !== 5) {
    //     this.navigation.prevEl[0].classList.contains('btn_disabled') ? this.navigation.prevEl[0].classList.remove('btn_disabled') : '';
    //     this.navigation.nextEl[0].classList.contains('btn_disabled') ? this.navigation.nextEl[0].classList.remove('btn_disabled') : '';
    //   }
    //   if (this.previousIndex == 3 && this.realIndex == 4) {
    //     this.navigation.nextEl[0].classList.add('btn_disabled');
    //   }
    // }
  },
};
const swiperParams_license_mob = {
  slidesPerView: 1.05,
  freeMode: true,
  spaceBetween: 20,
  breakpoints: {
    370: {
      slidesPerView: 1.2,
    },
    535: {
      slidesPerView: 1.7,
    },
    690: {
      slidesPerView: 2.2,
    },
    840: {
      slidesPerView: 4.2,
    },
    1010: {
      slidesPerView: 5.2,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl_web3, swiperParams_web3);
Object.assign(swiperEl_paysys, swiperParams_paysys);
swiperEl_license_desk !== '' ? Object.assign(swiperEl_license_desk, swiperParams_license_desk) : '';
swiperEl_license_mob !== '' ? Object.assign(swiperEl_license_mob, swiperParams_license_mob) : '';

// and now initialize it
swiperEl_web3.initialize();
swiperEl_paysys.initialize();
swiperEl_license_desk !== '' ? swiperEl_license_desk.initialize() : '';
swiperEl_license_mob !== '' ? swiperEl_license_mob.initialize() : '';
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
const input_companyName = document.querySelector('.field_3');
const input_message = document.querySelector('.field_4');
const form_btn = document.querySelector('.contactForm_btn');

const formData = {
  name: '',
  contact: '',
  subject: 'Message from ggr.global site',
  company: '',
  message: '',
}
const validate = (obj) => {
  const keys = Object.keys(obj);
  const valid_val = keys.map(el => obj[el] !== '' ||  el == 'company')
  console.log(valid_val);
  valid_val.map((el, id) => {
    if (el == false) {
      switch (keys[id]) {
        case 'name':
          input_name.classList.add('input_error')
          setTimeout(() => {
            input_name.classList.remove('input_error')
          }, 3000);
          break;
        case 'contact':
          input_contact.classList.add('input_error');
          setTimeout(() => {
            input_contact.classList.remove('input_error');
          }, 3000);
          break;
        case 'company':
          input_companyName.classList.add('input_error');
          setTimeout(() => {
            input_companyName.classList.remove('input_error');
          }, 3000);
          break;
        case 'message':
          input_message.classList.add('input_error');
          setTimeout(() => {
            input_message.classList.remove('input_error');
          }, 3000);
          break;
        default:
          break;
      }
    }
  })
  const valid_out = valid_val.filter(el => el == '' && el !== 'company')
  return valid_out.length > 0 ? false : true;
}

const formReset = () => {
  formData.name = '';
  input_name.value = '';
  formData.contact = '';
  input_contact.value = '';
  formData.company = '';
  input_companyName.value = '';
  formData.message = '';
  input_message.value = '';
  input_message.style.height = '98px';
  return console.log('form was cleared');
}

input_name.addEventListener('input', (e) => {
  formData.name = e.target.value;
});
input_contact.addEventListener('input', (e) => {
  formData.contact = e.target.value;
});
input_companyName.addEventListener('input', (e) => {
  formData.company = e.target.value;
});
input_message.addEventListener('input', (e) => {
  formData.message = e.target.value;
});
form_btn.addEventListener('click', (e) => {
  if(validate(formData)) {
    console.log(formData);
    useFetch(formData);
    formReset();
  } else {
    console.log('form was not filled correctly');
  }
})

const loader = document.querySelector('.loader');
const popup = document.querySelector('.popup');
const popup_btn = document.querySelector('.popup_btn');
loader.addEventListener("click", (e) => {
  if (!e.target.classList.contains("popup") && popup.style.display == "flex") {
    popup.style.display = "none";
    loader.style.display = "none";
    return true;
  } else {
    return false;
  }
});
popup_btn.addEventListener('click', (e) => {
  e.stopPropagation();
  popup.style.display = 'none';
  loader.style.display = 'none';
})
const useFetch = (dataBlob) => {
  loader.style.display = 'flex';
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('X-Client-Ip', 'any');
  myHeaders.append('X-Visitor-Id', 'dont_care');
  const options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(dataBlob),
  };
  fetch( 'https://pyroproxy.herokuapp.com/https://pyro-mailer.vercel.app/send', options )
    .then( response => response.text() )
    .then( response => {
      console.log('response: ' + response);
      popup.style.display = 'flex';
    })
    .catch((err) => console.log(err));
}
// form logic end
