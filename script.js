(function (w, d, s, o, f, js, fjs) {
  w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
  w[o].q = w[o].q || [];

  let isWidgetReady = false;
  let loader;

  function addLoaderStyles() {
    if (d.getElementById('vc-widget-loader-styles')) return;
    
    const style = d.createElement('style');
    style.id = 'vc-widget-loader-styles';
    style.innerHTML = `
      :root {
        --accent-color: #95b700;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .vc-widget-loader {
        display: inline-block;
        width: 40px;
        height: 40px;
        animation: spin 1.4s linear infinite;
        position: relative;
      }

      .vc-widget-loader::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50px;
        padding: 4px;
        background: linear-gradient(45deg, var(--accent-color, #95b700), #ffffff);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }

      .vc-widget-loader-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
    `;
    d.head.appendChild(style);
  }

  function showLoader() {
    if (loader) return;

    loader = d.createElement('div');
    loader.className = 'vc-widget-loader-container';
    loader.innerHTML = '<div class="vc-widget-loader"></div>';

    if (d.body) {
      d.body.appendChild(loader);
    } else {
      d.addEventListener('DOMContentLoaded', function () {
        d.body.appendChild(loader);
      }, { once: true });
    }
  }

  function hideLoader() {
    if (loader) loader.remove();
  }

  d.addEventListener('click', function (e) {
    const target = e.target;
    const link = target && target.closest ? target.closest('a[href^="#booking"]') : null;
    if (link && !isWidgetReady) showLoader();
  }, true);

  addLoaderStyles()

  js = d.createElement(s);
  fjs = document.currentScript || d.getElementsByTagName(s)[0];
  js.id = o;
  js.src = f;
  js.defer = true;

  js.onload = function () {
    isWidgetReady = true;
    hideLoader();
  };

  js.onerror = function () {
    hideLoader();
  };

  fjs.parentNode.insertBefore(js, fjs);
})(window, document, 'script', 'booking', 'https://cabinet.vivacrm.ru/widget.js');

// Конфигурация и инициализация СНАРУЖИ onload (через очередь команд)
function onDomReady(cb) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cb, { once: true });
  } else {
    cb();
  }
}

onDomReady(function() {
  window['booking']('init', {
  "theme": "light",
  "blocks": [],
  "channel": "cascade",
  "currency": "RUB",
  "darkLogo": "",
  "language": "ru",
  "lightLogo": "",
  "tenantKey": "l8jvFs",
  "ymEventId": "103926753",
  "vocabulary": {
    "room": "зал",
    "class": "занятие",
    "place": "локация",
    "action": "записаться",
    "master": "исполнитель",
    "service": "тренировка"
  },
  "bookingDays": 14,
  "description": "",
  "borderRadius": true,
  "displaySteps": true,
  "userContacts": {
    "requestLastName": true,
    "lastNameRequired": false,
    "requestFirstName": true,
    "firstNameRequired": false
  },
  "widgetStyles": {
    "fontFamily": "Onest",
    "accentColor": "#95b700",
    "secondColor": "#95b700",
    "tertiaryColor": "#f34f21",
    "backgroundColor": "#ffffff"
  },
  "hideselectors": false,
  "masterServiceId": "cbbb9a75-810f-4801-98ac-f3030e272862",
  "publicOfferLink": "https://padelnok.ru/public_offer",
  "staticWidgetMode": false,
  "displayCostOfSlot": true,
  "timeBeforeBooking": [
    {
      "id": "1",
      "time": 0,
      "timeWithoutTrainer": 0
    }
  ],
  "phoneInputSettings": {
    "code": "+7",
    "country": "ru"
  },
  "hideSelectedOptions": false,
  "preventIsolatedSlots": false,
  "expandSlotsToMinDuration": true,
  "slotPriceWithoutGradeImpact": false,
  "personalDataProcessingPolicyLink": "https://padelnok.ru/public_offer"
});
});
