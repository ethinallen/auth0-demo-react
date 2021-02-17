import { library } from '@fortawesome/fontawesome-svg-core';
import { faSalesforce } from '@fortawesome/free-brands-svg-icons';
import {
  faCaretDown,
  faCaretUp,
  faDatabase,
  faLock,
  faRedoAlt,
  faSignOutAlt,
  faUser,
  faUserSecret,
  faWindowRestore
} from '@fortawesome/free-solid-svg-icons';

const initFontAwesome = () => {
  library.add(faSalesforce);
  library.add(faCaretDown);
  library.add(faCaretUp);
  library.add(faDatabase);
  library.add(faLock);
  library.add(faSignOutAlt);
  library.add(faRedoAlt);
  library.add(faUser);
  library.add(faUserSecret);
  library.add(faWindowRestore);
};

export default initFontAwesome;