const selector = document.querySelector('.modal-form-input[type="tel"]');

const im = new Inputmask("+38 (099) 999-99-99");
im.mask(selector);