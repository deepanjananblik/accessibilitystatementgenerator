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

const initialState =
{
  counter: 0,
  data: {
    "heading":
    {
      "title": "ACCESSIBILITY STATEMENT GENERATOR",
      "subtitle": "Online Statement Generator Tool",
    },
    "report": {

      "basicInformation":
      {
        "companyName": "",
        "applicationURL": "",
        "statementGeneratedDate": "",
      },
      "yourEfforts": [],
      "conformanceStatus":
      {
        "accessibilityStandard": "",
        "accessibilityLevelSite": "",
        "currentContent": "",
      },
      "knownAccessibilityIssues": [
        { sortid: 0, title: 'Known accessibility issues 1', videotitle: '', discription: '', },
      ],
      "technicalSpecification":
      {
        "browsers": [
          { sortid: 0, title: 'Browser 1', value: '', },
        ],
        "assistiveTechnologies": [
          { sortid: 0, title: 'Assistive Technology 1', value: '', },
        ],
        "technologies": [],
      },
      "assessmentMethod":
      {
        "assessment": [],
        "assessmentRecentReport": '',
      },
      "feedBack":
      {
        "phoneNumber": '',
        "emailAddress": '',
        "postalAddress": '',
        "responseTime": '',
        "complaintsName": '',
        "departmentName": '',
        "JobTitle": '',
      },

    },
    "accessibility": [
      'A',
      'AA',
      'AAA'
    ],
    "assessmentMethodSite": [
      { type: 'checkbox', sortid: 0, value: 'Self-evaluation: the site was evaluated internally by the company or organization.' },
      { type: 'checkbox', sortid: 1, value: 'External evaluation: the site was evaluated by an external entity not involved in the design and development process.' },
    ],
    "accessibilityLevel": [
      '2.0',
      '2.1'
    ],
    "currentContentConformanceStatus": [
      'Fully conformant: the content fully conforms to the accessibility standard without any exceptions.',
      'Partially conformant: some parts of the content do not fully conform to the accessibility standard.',
      'Non conformant: the content does not conform to the accessibility standard.',
      'Unknown: the content has not been evaluated or the evaluation results are not available.',
    ],
    "organizationWebAccessibility": [
      { type: 'checkbox', sortid: 0, value: 'Accessibility is part of our mission statement.' },
      { type: 'checkbox', sortid: 1, value: 'Accessibility is part of our internal policies.' },
      { type: 'checkbox', sortid: 2, value: 'Accessibility is integrated into our procurement practices.' },
      { type: 'checkbox', sortid: 3, value: 'An accessibility officer or official has been appointed.' },
      { type: 'checkbox', sortid: 4, value: 'Continual accessibility training is provided for employees.' },
      { type: 'checkbox', sortid: 5, value: 'Clear accessibility targets and responsibilities exist within the organization.' },
      { type: 'checkbox', sortid: 6, value: 'Formal accessibility quality assurance methods exist within the organization.' },
      //{ type : 'inputtextbox', sortid : 7, value : 'Additional Effort 1' },
    ],
    "technologiesName": [
      { type: 'checkbox', sortid: 0, value: 'HTML' },
      { type: 'checkbox', sortid: 1, value: 'WAI-ARIA' },
      { type: 'checkbox', sortid: 2, value: 'CSS' },
      { type: 'checkbox', sortid: 3, value: 'Javascript' },
      { type: 'checkbox', sortid: 4, value: 'React' },
    ],
    // "technologiesName": [
    //   'HTML',
    //   'WAI-ARIA',
    //   'CSS',
    //   'Javascript',
    //   'React',
    // ],
    "help":
    {
      "selectedColorHeading": "The colors that are used in your brand must be used for different elements used in your website.",
      "primaryColorsSubHeading": "Primary Color denotes the most prominent colors of your brand, e.g. Logo colors.",
      "secondaryColorsSubHeading": "Secondary Color denotes the supportive colors (not prominent) used in your branding.",
      "wcagLevel": "As per WCAG 2.0 guidelines - AA (mid range) and AAA (highest) denotes levels of conformance. Conformance at higher levels indicates conformance at lower levels. UC recommends AA conformance for all Web-based information.",
      "colorContrastReportHeading": "Lore Ipsum Dolor Lite",
      "normalTextSectionHeading": "Lore Ipsum Dolor Lite",
      "largeTextSectionHeading": "Lore Ipsum Dolor Lite",
      "graphicalObjAndUISectionHeading": "Lore Ipsum Dolor Lite",
      "buttonCompSectionHeading": "Lore Ipsum Dolor Lite",
      "linkContrastCheckSectionHeading": "Lore Ipsum Dolor Lite",
      "contrastRatioSectionHeading": "Lore Ipsum Dolor Lite"
    },
    "aboutUsContent": "<div><p>What is Lorem Ipsum?</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p><p>Why do we use it?</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Why do we use it?</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p></div>"
  }
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_COMPANY_NAME) {

    state.data.report.basicInformation.companyName = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }

  if (action.type === ADD_WEBSITE_URL) {

    state.data.report.basicInformation.applicationURL = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }

  if (action.type === ADD_DATE) {

    state.data.report.basicInformation.statementGeneratedDate = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }

  if (action.type === ADD_EXISTING_EFFORTS) {

    let yourEffortsNewRef = state.data.report.yourEfforts;

    if (action.payload.check == true) {

      yourEffortsNewRef.splice(action.payload.index, 0, { value: action.payload.target, sortid: action.payload.index });

    } else {

      let pointer = -1;
      for (let i = 0; i < yourEffortsNewRef.length; i++) {

        //console.log( action.payload.target + " = " + yourEffortsNewRef[i].value );

        if (action.payload.target == yourEffortsNewRef[i].value) {
          pointer = i;
          break;
        }
      }
      if (pointer > -1) {
        yourEffortsNewRef.splice(pointer, 1);
      }
    }
    yourEffortsNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.yourEfforts = [...yourEffortsNewRef];

    //console.log("action1111", action.payload.check, "yourEfforts", state.data.yourEfforts);
    //console.log( "yourEfforts : ", state.data.yourEfforts );

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ADD_ADDITIONAL_EFFORTS) {

    // left side 

    let organizationWebAccessibilityNewRef = state.data.organizationWebAccessibility;
    organizationWebAccessibilityNewRef.sort(function (a, b) { return a.sortid - b.sortid });

    let sortid = organizationWebAccessibilityNewRef[organizationWebAccessibilityNewRef.length - 1].sortid;
    sortid++;
    organizationWebAccessibilityNewRef.splice(action.payload.index, 0, { type: action.payload.type, sortid: sortid, title: 'Additional Effort ' + (sortid - 6), value: '' });
    organizationWebAccessibilityNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.organizationWebAccessibility = [...organizationWebAccessibilityNewRef];

    console.log("from reducers > ADD_ADDITIONAL_EFFORTS > organizationWebAccessibility list > ", state.data.organizationWebAccessibility);

    // right side 

    let yourEffortsNewRef = state.data.report.yourEfforts;
    yourEffortsNewRef.splice(action.payload.index, 0, { value: '', sortid: sortid });
    yourEffortsNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.yourEfforts = [...yourEffortsNewRef];

    console.log("from reducers > ADD_ADDITIONAL_EFFORTS > yourEfforts list > ", state.data.yourEfforts);

    // for both side

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ONCHANGE_ADD_EXISTING_EFFORTS) {

    let sortid;

    // left side

    let organizationWebAccessibilityNewRef = state.data.organizationWebAccessibility;
    sortid = organizationWebAccessibilityNewRef[action.payload.index].sortid;
    organizationWebAccessibilityNewRef[action.payload.index].value = action.payload.target;
    state.data.organizationWebAccessibility = [...organizationWebAccessibilityNewRef];

    console.log("from reducers > ONCHANGE_ADD_EXISTING_EFFORTS > organizationWebAccessibility list > ", state.data.organizationWebAccessibility);

    //right side

    let yourEffortsNewRef = state.data.report.yourEfforts;
    let index = yourEffortsNewRef.findIndex(item => item.sortid === sortid);
    yourEffortsNewRef[index].value = action.payload.target;
    state.data.report.yourEfforts = [...yourEffortsNewRef];

    console.log("from reducers > ONCHANGE_ADD_EXISTING_EFFORTS > yourEfforts list > ", state.data.yourEfforts);

    // for both side 

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === REMOVE_EXISTING_EFFORTS) {

    let sortid;

    // left side 

    let organizationWebAccessibilityNewRef = state.data.organizationWebAccessibility;
    sortid = organizationWebAccessibilityNewRef[action.payload.index].sortid;
    organizationWebAccessibilityNewRef.splice(action.payload.index, 1);
    organizationWebAccessibilityNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.organizationWebAccessibility = [...organizationWebAccessibilityNewRef];

    console.log("from reducers > REMOVE_EXISTING_EFFORTS > organizationWebAccessibility list > ", state.data.organizationWebAccessibility);

    // right side 

    let yourEffortsNewRef = state.data.report.yourEfforts;
    let index = yourEffortsNewRef.findIndex(item => item.sortid === sortid);
    yourEffortsNewRef.splice(index, 1);
    yourEffortsNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.yourEfforts = [...yourEffortsNewRef];

    console.log("from reducers > REMOVE_EXISTING_EFFORTS > yourEffortsNewRef list > ", state.data.yourEfforts);

    // for both side

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ADD_ACCESSIBILITY_STANDAR) {

    let conformanceStatusNewRef = state.data.report.conformanceStatus;
    conformanceStatusNewRef.accessibilityStandard = action.payload.target;
    state.data.report.conformanceStatus = { ...conformanceStatusNewRef };
    return Object.assign({}, state, {
      data: state.data
    });
  }

  if (action.type === ADD_ACCESSIBILITY_LEVEL) {

    let conformanceStatusNewRef = state.data.report.conformanceStatus;
    conformanceStatusNewRef.accessibilityLevelSite = action.payload.target;
    state.data.report.conformanceStatus = { ...conformanceStatusNewRef };

    return Object.assign({}, state, {
      data: state.data
    });
  }

  if (action.type === ADD_CURRENT_CONFORMANCE_STATUS) {

    let conformanceStatusNewRef = state.data.report.conformanceStatus;
    conformanceStatusNewRef.currentContent = action.payload.target;
    state.data.report.conformanceStatus = { ...conformanceStatusNewRef };

    return Object.assign({}, state, {
      data: state.data
    });
  }

  if (action.type === ADD_KNOWN_ACCESSIBILITY_ISSUES) {

    let knownAccessibilityIssuesNewRef = state.data.report.knownAccessibilityIssues;
    let sortid = knownAccessibilityIssuesNewRef[knownAccessibilityIssuesNewRef.length - 1].sortid;
    sortid++;
    knownAccessibilityIssuesNewRef.splice(action.payload.index, 0, { sortid: sortid, title: 'Known accessibility issues ' + (sortid + 1), videotitle: '', discription: '' });
    knownAccessibilityIssuesNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.knownAccessibilityIssues = [...knownAccessibilityIssuesNewRef];
    console.log(state.data.knownAccessibilityIssues);

    return Object.assign({}, state, {
      data: state.data
    });
  }

  if (action.type === REMOVE_ACCESSIBILITY_ISSUES) {

    let sortid;
    let knownAccessibilityIssuesNewRef = state.data.report.knownAccessibilityIssues;
    sortid = knownAccessibilityIssuesNewRef[action.payload.index].sortid;
    knownAccessibilityIssuesNewRef.splice(action.payload.index, 1);
    knownAccessibilityIssuesNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.knownAccessibilityIssues = [...knownAccessibilityIssuesNewRef];
    console.log(state.data.knownAccessibilityIssues);
    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ONCHANGE_ADD_ACCESSIBILITY_VIDEO_TITLE) {


    let knownAccessibilityIssuesNewRef = state.data.report.knownAccessibilityIssues;
    knownAccessibilityIssuesNewRef[action.payload.index].videotitle = action.payload.target;
    state.data.report.knownAccessibilityIssues = [...knownAccessibilityIssuesNewRef];

    console.log(state.data.knownAccessibilityIssues);

    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ONCHANGE_ADD_ACCESSIBILITY_DISCRIPTION) {

    let knownAccessibilityIssuesNewRef = state.data.report.knownAccessibilityIssues;
    knownAccessibilityIssuesNewRef[action.payload.index].discription = action.payload.target;
    state.data.report.knownAccessibilityIssues = [...knownAccessibilityIssuesNewRef];

    console.log(state.data.report.knownAccessibilityIssues);

    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ADD_BROWSER) {

    let browsersNewRef = state.data.report.technicalSpecification.browsers;
    let sortid = browsersNewRef[browsersNewRef.length - 1].sortid;
    sortid++;
    browsersNewRef.splice(action.payload.index, 0, { sortid: sortid, title: 'Browser ' + (sortid + 1), value: '', });
    browsersNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.technicalSpecification.browsers = [...browsersNewRef];

    console.log(state.data.report.technicalSpecification.browsers);

    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === REMOVE_BROWSER) {
    let browsersNewRef = state.data.report.technicalSpecification.browsers;
    browsersNewRef.splice(action.payload.index, 1);
    browsersNewRef.sort(function (a, b) { return a.sortid - b.sortid });

    state.data.report.technicalSpecification.browsers = [...browsersNewRef];
    console.log(state.data.report.technicalSpecification.browsers);

    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ONCHANGE_ADD_BROWSER) {
    let browsersNewRef = state.data.report.technicalSpecification.browsers;
    browsersNewRef[action.payload.index].value = action.payload.target;
    state.data.report.technicalSpecification.browsers = [...browsersNewRef];
    console.log(state.data.report.technicalSpecification.browsers);

    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }
  if (action.type === ADD_ASSISTIVE_TECHNOLOGIES) {

    let assistiveTechnologiesNewRef = state.data.report.technicalSpecification.assistiveTechnologies;
    let sortid = assistiveTechnologiesNewRef[assistiveTechnologiesNewRef.length - 1].sortid;
    sortid++;
    assistiveTechnologiesNewRef.splice(action.payload.index, 0, { sortid: sortid, title: 'Assistive Technology ' + (sortid + 1), value: '', });
    assistiveTechnologiesNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.technicalSpecification.assistiveTechnologies = [...assistiveTechnologiesNewRef];

    console.log(state.data.report.technicalSpecification.assistiveTechnologies);

    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === REMOVE_ASSISTIVE_TECHNOLOGIES) {

    let assistiveTechnologiesNewRef = state.data.report.technicalSpecification.assistiveTechnologies;
    assistiveTechnologiesNewRef.splice(action.payload.index, 1);
    assistiveTechnologiesNewRef.sort(function (a, b) { return a.sortid - b.sortid });

    state.data.report.technicalSpecification.assistiveTechnologies = [...assistiveTechnologiesNewRef];
    console.log(state.data.report.technicalSpecification.assistiveTechnologies);

    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ONCHANGE_ADD_ASSISTIVE_TECHNOLOGIES) {
    let assistiveTechnologiesNewRef = state.data.report.technicalSpecification.assistiveTechnologies;
    assistiveTechnologiesNewRef[action.payload.index].value = action.payload.target;
    state.data.report.technicalSpecification.assistiveTechnologies = [...assistiveTechnologiesNewRef];
    console.log(state.data.report.technicalSpecification.assistiveTechnologies);

    state.counter = state.counter + 1;
    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ADD_EXISTING_TECHNOLOGIES) {

    let technologiesNewRef = state.data.report.technicalSpecification.technologies;

    if (action.payload.check == true) {

      technologiesNewRef.splice(action.payload.index, 0, { value: action.payload.target, sortid: action.payload.index });

    } else {

      let pointer = -1;
      for (let i = 0; i < technologiesNewRef.length; i++) {

        if (action.payload.target == technologiesNewRef[i].value) {
          pointer = i;
          break;
        }
      }
      if (pointer > -1) {
        technologiesNewRef.splice(pointer, 1);
      }
    }
    technologiesNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.technicalSpecification.technologies = [...technologiesNewRef];

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ADD_ANOTHER_TECHNOLOGIES) {

    // left side 

    let technologiesNameListNewRef = state.data.technologiesName;
    technologiesNameListNewRef.sort(function (a, b) { return a.sortid - b.sortid });

    let sortid = technologiesNameListNewRef[technologiesNameListNewRef.length - 1].sortid;
    sortid++;
    technologiesNameListNewRef.splice(action.payload.index, 0, { type: action.payload.type, sortid: sortid, title: 'Another technology ' + (sortid - 4), value: '' });
    technologiesNameListNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.technologiesName = [...technologiesNameListNewRef];

    // right side 

    let technologiesNewRef = state.data.report.technicalSpecification.technologies;
    technologiesNewRef.splice(action.payload.index, 0, { value: '', sortid: sortid });
    technologiesNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.technicalSpecification.technologies = [...technologiesNewRef];


    // for both side

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === REMOVE_ANOTHER_TECHNOLOGIES) {

    let sortid;

    // left side 

    let technologiesNameListNewRef = state.data.technologiesName;
    sortid = technologiesNameListNewRef[action.payload.index].sortid;
    technologiesNameListNewRef.splice(action.payload.index, 1);
    technologiesNameListNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.technologiesName = [...technologiesNameListNewRef];


    // right side 

    let technologiesNewRef = state.data.report.technicalSpecification.technologies;
    let index = technologiesNewRef.findIndex(item => item.sortid === sortid);
    technologiesNewRef.splice(index, 1);
    technologiesNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.technicalSpecification.technologies = [...technologiesNewRef];


    // for both side

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ONCHANGE_ADD_TECHNOLOGIES) {

    let sortid;

    // left side

    let technologiesNameListNewRef = state.data.technologiesName;
    sortid = technologiesNameListNewRef[action.payload.index].sortid;
    technologiesNameListNewRef[action.payload.index].value = action.payload.target;
    state.data.technologiesName = [...technologiesNameListNewRef];


    //right side

    let technologiesNewRef = state.data.report.technicalSpecification.technologies;
    let index = technologiesNewRef.findIndex(item => item.sortid === sortid);
    technologiesNewRef[index].value = action.payload.target;
    state.data.report.technicalSpecification.technologies = [...technologiesNewRef];


    // for both side 

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ADD_EXISTING_ASSESSMENT_METHODS) {

    let assessmentNewRef = state.data.report.assessmentMethod.assessment;

    if (action.payload.check == true) {

      assessmentNewRef.splice(action.payload.index, 0, { value: action.payload.target, sortid: action.payload.index });

    } else {

      let pointer = -1;
      for (let i = 0; i < assessmentNewRef.length; i++) {

        if (action.payload.target == assessmentNewRef[i].value) {
          pointer = i;
          break;
        }
      }
      if (pointer > -1) {
        assessmentNewRef.splice(pointer, 1);
      }
    }
    assessmentNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.assessmentMethod.assessment = [...assessmentNewRef];
    console.log(state.data.report.assessmentMethod.assessment);

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });

  }

  if (action.type === ADD_ANOTHER_ASSESSMENT_METHODS) {

    // left side 

    let assessmentMethodSiteNewRef = state.data.assessmentMethodSite;
    assessmentMethodSiteNewRef.sort(function (a, b) { return a.sortid - b.sortid });

    let sortid = assessmentMethodSiteNewRef[assessmentMethodSiteNewRef.length - 1].sortid;
    sortid++;
    assessmentMethodSiteNewRef.splice(action.payload.index, 0, { type: action.payload.type, sortid: sortid, title: 'Another method ' + (sortid - 1), value: '' });
    assessmentMethodSiteNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.assessmentMethodSite = [...assessmentMethodSiteNewRef];

    // right side 

    let assessmentNewRef = state.data.report.assessmentMethod.assessment;
    assessmentNewRef.splice(action.payload.index, 0, { value: '', sortid: sortid });
    assessmentNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.assessmentMethod.assessment = [...assessmentNewRef];
    console.log(state.data.assessmentMethodSite, 'assessment', state.data.report.assessmentMethod.assessment);

    // for both side

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ONCHANGE_ADD_ANOTHER_ASSESSMENT_METHODS) {

    let sortid;

    // left side

    let assessmentMethodSiteNewRef = state.data.assessmentMethodSite;
    sortid = assessmentMethodSiteNewRef[action.payload.index].sortid;

    assessmentMethodSiteNewRef[action.payload.index].value = action.payload.target;
    state.data.assessmentMethodSite = [...assessmentMethodSiteNewRef];

    console.log('left', state.data.assessmentMethodSite);

    //right side

    let assessmentNewRef = state.data.report.assessmentMethod.assessment;
    let index = assessmentNewRef.findIndex(item => item.sortid === sortid);
    assessmentNewRef[index].value = action.payload.target;
    state.data.report.assessmentMethod.assessment = [...assessmentNewRef];

    console.log('right', state.data.report.assessmentMethod.assessment);
    // for both side 

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === REMOVE_ANOTHER_ASSESSMENT_METHODS) {

    let sortid;

    // left side 
    let assessmentMethodSiteNewRef = state.data.assessmentMethodSite;
    sortid = assessmentMethodSiteNewRef[action.payload.index].sortid;

    assessmentMethodSiteNewRef.splice(action.payload.index, 1);
    assessmentMethodSiteNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.assessmentMethodSite = [...assessmentMethodSiteNewRef];
    console.log('MethodSite', state.data.assessmentMethodSite);

    // right side 

    let assessmentNewRef = state.data.report.assessmentMethod.assessment;
    let index = assessmentNewRef.findIndex(item => item.sortid === sortid);
    assessmentNewRef.splice(index, 1);
    assessmentNewRef.sort(function (a, b) { return a.sortid - b.sortid });
    state.data.report.assessmentMethod.assessment = [...assessmentNewRef];

    console.log('Method', state.data.report.assessmentMethod.assessment);
    // for both side

    state.counter = state.counter + 1;

    return Object.assign({}, state, {
      counter: state.counter,
      data: state.data
    });
  }

  if (action.type === ADD_ACCESSIBILITY_EVALUATION_REPORTS) {

    state.data.report.assessmentMethod.assessmentRecentReport = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }
  if (action.type === ADD_PHONE_NO) {

    state.data.report.feedBack.phoneNumber = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }
  if (action.type === ADD_EMAIL_ADDRESS) {

    state.data.report.feedBack.emailAddress = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }
  if (action.type === ADD_POSTAL_ADDRESS) {

    state.data.report.feedBack.postalAddress = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }
  if (action.type === ADD_RESPONSE_TIME) {

    state.data.report.feedBack.responseTime = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }
  if (action.type === ADD_FORMAL_COMPLAINTS) {

    state.data.report.feedBack.complaintsName = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }
  if (action.type === ADD_PERSON_NAME) {

    state.data.report.feedBack.departmentName = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }
  if (action.type === ADD_JOB_TITLE) {

    state.data.report.feedBack.JobTitle = action.payload.target;
    return Object.assign({}, state, {
      data: state.data
    });
  }


  return state;
};

export default rootReducer;