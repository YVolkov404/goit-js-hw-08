// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { insertGalleryMarkup } from './gallery-markup';
insertGalleryMarkup(galleryItems);

// SimpleLightbox settings
import { simpleLightboxSettings } from './simplelightbox-settings';
new SimpleLightbox('.gallery a', simpleLightboxSettings);
