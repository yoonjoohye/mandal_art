import { Map } from 'immutable';

const SHOW = 'modal/SHOW';
const HIDE = 'modal/HIDE';

export const show = () => ({
  type: SHOW
});

export const hide = () => ({
  type: HIDE
});

const initialState = Map({
  isOpen: false,
  isConfirm: false,
  isValid: false,
  title: '',
  contents: '',
  buttonName: '확인',
  img: '',
  path: ''
});

const handleModal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        isOpen: true,
        title: state.isConfirm,
        contents: state.contents,
        path: state.path
      };

    case HIDE:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export default handleModal;
