// Constants
import { API_URL } from 'utils/constants';

export function parseItems(items) {
  return items.map((item) => {
    const options = {
      src: `${API_URL}${item.path}`,
      caption: '',
    };

    if (item.altText) {
      options.altText = item.altText;
    }

    if (item.caption) {
      options.caption = item.caption;
    }

    return options;
  });
}
