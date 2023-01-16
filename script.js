'use strict';

const notifications = document.querySelector('.notifications');
const counterElement = notifications.querySelector('.notifications__counter');
const readButton = notifications.querySelector('.notifications__read-button');
const notificationsList = notifications.querySelector('.notifications__list');

readButton.addEventListener('click', () => {
  const newItems = notifications.querySelectorAll('.notifications__item--new');
  newItems.forEach(item => {
    item.classList.remove('notifications__item--new');
  });
  counterElement.textContent = 0;
});

notificationsList.addEventListener('click', evt => {
  const currentTarget = evt.target.closest('li');

  if (currentTarget.classList.contains('notifications__item--new')) {
    currentTarget.classList.remove('notifications__item--new');
    counterElement.textContent = parseInt(counterElement.textContent) - 1;
  }
})
