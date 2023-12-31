'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

const modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', foo);

function foo(event) {
  event.preventDefault();

  const userSearch = form.search.value;

  const url = new URL('https://pixabay.com/api/');
  url.searchParams.append('key', '41563330-08ed4e1341b4edecabdae7272');
  url.searchParams.append('q', userSearch);
  url.searchParams.append('image_type', 'photo');
  url.searchParams.append('orientation', 'horizontal');
  url.searchParams.append('safesearch', true);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Your request is not ok!');
      }
      return response.json();
    })
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          title: 'Nothing found!',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      gallery.innerHTML = images.hits.reduce(
        (
          acc,
          {
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
          }
        ) =>
          acc +
          `<li class='gallery-item'>
            <a class='gallery-link' href='${largeImageURL}'>
              <img
                  class='gallery-image'
                  src='${webformatURL}'
                  alt='${tags}'
                  width='360'
                  height='200'
                  />
            </a>
            <ul class='gallery-statistic'>
                <li class='gallery-likes'>${likes}</li>
                <li class='gallery-views'>${views}</li>
                <li class='gallery-comments'>${comments}</li>
                <li class='gallery-downloads'>${downloads}</li>
            </ul>
          </li>`,
        ''
      );

      modal.refresh();
    })
    .catch(error => console.log(error));
}
