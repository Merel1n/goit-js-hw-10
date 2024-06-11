import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageDefsUrl from '../img/symbol-defs.svg';
import imageOkUrl from '../img/symbol-ok.svg';
const formElem = document.querySelector('.form');

formElem.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const state = document.querySelector('input[name="state"]:checked').value;
  const promise = createPromise(delay, state);
  formElem.reset();
}

function createPromise(delay, state) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(
          iziToast.success({
            title: 'Fulfilled',
            message: `promise in ${delay}ms`,
            titleColor: '#FFFFFF',
            messageColor: '#FFFFFF',
            backgroundColor: '#59A10D',
            iconUrl: imageOkUrl,
            iconColor: '#FAFAFB',
            imageWidth: 302,
            position: 'topRight',
          })
        );
      } else {
        reject(
          iziToast.error({
            title: 'Rejected',
            message: `promise in ${delay}ms`,
            titleColor: '#FFFFFF',
            messageColor: '#FFFFFF',
            backgroundColor: '#ef4040',
            iconUrl: imageDefsUrl,
            iconColor: '#FAFAFB',
            imageWidth: 302,
            position: 'topRight',
          })
        );
      }
    }, delay);
  });
  return promise;
}
