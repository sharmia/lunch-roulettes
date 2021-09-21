import ActionTypes from '../constants/ActionTypes';
import { getRestaurantById } from '../selectors/restaurants';
import { scrollToTop } from './pageUi';

export function setCenter(center) {
  return {
    type: ActionTypes.SET_CENTER,
    center
  };
}

export function clearCenter() {
  return {
    type: ActionTypes.CLEAR_CENTER
  };
}

export function showGoogleInfoWindow(event) {
  return {
    type: ActionTypes.SHOW_GOOGLE_INFO_WINDOW,
    placeId: event.placeId,
    latLng: {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
  };
}

export function showRestaurantInfoWindow(restaurant) {
  return {
    type: ActionTypes.SHOW_RESTAURANT_INFO_WINDOW,
    restaurant
  };
}

export function hideInfoWindow() {
  return {
    type: ActionTypes.HIDE_INFO_WINDOW
  };
}

export function createTempMarker(result) {
  return {
    type: ActionTypes.CREATE_TEMP_MARKER,
    result
  };
}

export function clearTempMarker() {
  return {
    type: ActionTypes.CLEAR_TEMP_MARKER
  };
}

export function clearNewlyAdded() {
  return {
    type: ActionTypes.CLEAR_MAP_UI_NEWLY_ADDED
  };
}

export function showMapAndInfoWindow(id) {
  return (dispatch, getState) => {
    dispatch(showRestaurantInfoWindow(getRestaurantById(getState(), id)));
    dispatch(scrollToTop());
  };
}

export function setShowUnvoted(val) {
  return {
    type: ActionTypes.SET_SHOW_UNVOTED,
    val
  };
}

export function setShowPOIs(val) {
  return {
    type: ActionTypes.SET_SHOW_POIS,
    val
  };
}
