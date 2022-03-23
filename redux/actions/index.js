import {
  ADD_PRIMARY_COLOR_REQUEST,
  REMOVE_PRIMARY_COLOR_REQUEST,
  ADD_SECONDARY_COLOR_REQUEST,
  REMOVE_SECONDARY_COLOR_REQUEST,
  COLOR_CONTRAST_ANALYZE_REQUEST,
  SELECTED_WCAG_LEVELS_AA,
  SELECTED_WCAG_LEVELS_AAA,
  COLOR_CONTRAST_SUGGESTION_REQUEST,
  APPLY_COLOR_CONTRAST_SUGGESTION,
} from "../constants/action-types";

export function addPrimaryColor(payload) {
  return { type: ADD_PRIMARY_COLOR_REQUEST, payload }
};

export function removePrimaryColor(payload) {
  return { type: REMOVE_PRIMARY_COLOR_REQUEST, payload }
};

export function addSecondaryColor(payload) {
  return { type: ADD_SECONDARY_COLOR_REQUEST, payload }
};

export function removeSecondaryColor(payload) {
  return { type: REMOVE_SECONDARY_COLOR_REQUEST, payload }
};
export function colorContrastAnalyze(payload) {
  return { type: COLOR_CONTRAST_ANALYZE_REQUEST, payload }
};
export function selectedWCAGlevelsAa(payload) {
  return { type: SELECTED_WCAG_LEVELS_AA, payload }
};
export function selectedWCAGlevelsAaa(payload) {
  return { type: SELECTED_WCAG_LEVELS_AAA, payload }
};
export function colorContrastSuggestionRequest(payload) {
  return { type: COLOR_CONTRAST_SUGGESTION_REQUEST, payload }
};
export function applyColorContrastSuggestion(payload) {
  return { type: APPLY_COLOR_CONTRAST_SUGGESTION, payload }
};