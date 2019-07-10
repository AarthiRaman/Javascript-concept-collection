import i18n from "../i18n/index";

const initialState = {
  isIndex: true,
  currentTopic: "",
  i18n
};

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case "GO_TO_INDEX":
      return {
        ...state,
        isIndex: true,
        currentTopic: ""
      };
    case "GO_TO_TOPIC":
      return {
        ...state,
        isIndex: false,
        currentTopic: action.topic
      };
    default:
      return state;
  }
}
