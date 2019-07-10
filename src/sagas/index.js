import { put } from "redux-saga/effects";

export function* goToIndex() {
  yield put({ type: "GO_TO_INDEX" });
}

export default function* goToTopic(topic) {
  yield put({
    type: "GO_TO_TOPIC",
    topic
  });
}
