import {
  ADD_COMPANY_NAME,
  ADD_WEBSITE_URL,
  ADD_DATE,
  ADD_EXISTING_EFFORTS,
  ADD_ADDITIONAL_EFFORTS,
  ONCHANGE_ADD_EXISTING_EFFORTS,
  REMOVE_EXISTING_EFFORTS,
  ADD_ACCESSIBILITY_STANDAR,
  ADD_ACCESSIBILITY_LEVEL,
  ADD_CURRENT_CONFORMANCE_STATUS,
  ADD_KNOWN_ACCESSIBILITY_ISSUES,
  REMOVE_ACCESSIBILITY_ISSUES,
  ONCHANGE_ADD_ACCESSIBILITY_VIDEO_TITLE,
  ONCHANGE_ADD_ACCESSIBILITY_DISCRIPTION,
  ADD_BROWSER,
  REMOVE_BROWSER,
  ONCHANGE_ADD_BROWSER,
  ADD_ASSISTIVE_TECHNOLOGIES,
  REMOVE_ASSISTIVE_TECHNOLOGIES,
  ONCHANGE_ADD_ASSISTIVE_TECHNOLOGIES,
  ADD_EXISTING_TECHNOLOGIES,
  ADD_ANOTHER_TECHNOLOGIES,
  REMOVE_ANOTHER_TECHNOLOGIES,
  ONCHANGE_ADD_TECHNOLOGIES,
  ADD_EXISTING_ASSESSMENT_METHODS,
  ADD_ANOTHER_ASSESSMENT_METHODS,
  REMOVE_ANOTHER_ASSESSMENT_METHODS,
  ONCHANGE_ADD_ANOTHER_ASSESSMENT_METHODS,
  ADD_ACCESSIBILITY_EVALUATION_REPORTS,
  ADD_PHONE_NO,
  ADD_EMAIL_ADDRESS,
  ADD_POSTAL_ADDRESS,
  ADD_RESPONSE_TIME,
  ADD_FORMAL_COMPLAINTS,
  ADD_PERSON_NAME,
  ADD_JOB_TITLE
} from "../constants/action-types";

export function addCompanyName(payload) {
  return { type: ADD_COMPANY_NAME, payload }
};

export function addWebsiteURL(payload) {
  return { type: ADD_WEBSITE_URL, payload }
};

export function addDate(payload) {
  return { type: ADD_DATE, payload }
};

export function addExistingEfforts(payload) {
  return { type: ADD_EXISTING_EFFORTS, payload }
};

export function addAdditionalEfforts(payload) {
  return { type: ADD_ADDITIONAL_EFFORTS, payload }
};

export function onChangeAddExistingEfforts(payload) {
  return { type: ONCHANGE_ADD_EXISTING_EFFORTS, payload }
};

export function removeExistingEfforts(payload) {
  return { type: REMOVE_EXISTING_EFFORTS, payload }
};
export function addAccessibilityStandar(payload) {
  return { type: ADD_ACCESSIBILITY_STANDAR, payload }
};
export function addAccessibilityLevel(payload) {
  return { type: ADD_ACCESSIBILITY_LEVEL, payload }
};
export function addConformanceStatus(payload) {
  return { type: ADD_CURRENT_CONFORMANCE_STATUS, payload }
};
export function addAccessibility(payload) {
  return { type: ADD_KNOWN_ACCESSIBILITY_ISSUES, payload }
};
export function removeAccessibility(payload) {
  return { type: REMOVE_ACCESSIBILITY_ISSUES, payload }
};
export function onChangeAddAccessibilityVideoTitle(payload) {
  return { type: ONCHANGE_ADD_ACCESSIBILITY_VIDEO_TITLE, payload }
};
export function onChangeAddAccessibilityDiscription(payload) {
  return { type: ONCHANGE_ADD_ACCESSIBILITY_DISCRIPTION, payload }
};
export function addBrowser(payload) {
  return { type: ADD_BROWSER, payload }
};
export function removeBrowser(payload) {
  return { type: REMOVE_BROWSER, payload }
};
export function onchangeAddBrowser(payload) {
  return { type: ONCHANGE_ADD_BROWSER, payload }
};
export function addAssistiveTechnologies(payload) {
  return { type: ADD_ASSISTIVE_TECHNOLOGIES, payload }
};
export function removeAssistiveTechnologies(payload) {
  return { type: REMOVE_ASSISTIVE_TECHNOLOGIES, payload }
};
export function onchangeAssistiveTechnologies(payload) {
  return { type: ONCHANGE_ADD_ASSISTIVE_TECHNOLOGIES, payload }
};
export function addExistingTechnologies(payload) {
  return { type: ADD_EXISTING_TECHNOLOGIES, payload }
};
export function addAnotherTechnologies(payload) {
  return { type: ADD_ANOTHER_TECHNOLOGIES, payload }
};
export function removeAnotherTechnologies(payload) {
  return { type: REMOVE_ANOTHER_TECHNOLOGIES, payload }
};
export function onChangeAddAnotherTechnologies(payload) {
  return { type: ONCHANGE_ADD_TECHNOLOGIES, payload }
};
export function addExistingAssessmentMethod(payload) {
  return { type: ADD_EXISTING_ASSESSMENT_METHODS, payload }
};
export function addAnotherAssessmentMethod(payload) {
  return { type: ADD_ANOTHER_ASSESSMENT_METHODS, payload }
};
export function removeAnotherAssessmentMethod(payload) {
  return { type: REMOVE_ANOTHER_ASSESSMENT_METHODS, payload }
};
export function onchangeAddAnotherAssessmentMethod(payload) {
  return { type: ONCHANGE_ADD_ANOTHER_ASSESSMENT_METHODS, payload }
};
export function addAccessibilityEvaluationReports(payload) {
  return { type: ADD_ACCESSIBILITY_EVALUATION_REPORTS, payload }
};
export function addPhoneNo(payload) {
  return { type: ADD_PHONE_NO, payload }
};
export function addEmailAddress(payload) {
  return { type: ADD_EMAIL_ADDRESS, payload }
};
export function addPostalAddress(payload) {
  return { type: ADD_POSTAL_ADDRESS, payload }
};
export function addResponseTime(payload) {
  return { type: ADD_RESPONSE_TIME, payload }
};
export function addFormalComplaints(payload) {
  return { type: ADD_FORMAL_COMPLAINTS, payload }
};
export function addPersoneName(payload) {
  return { type: ADD_PERSON_NAME, payload }
};
export function addJobTitle(payload) {
  return { type: ADD_JOB_TITLE, payload }
};


