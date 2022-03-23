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
import data from '../../data_source/data';
import { generate } from "shortid";
import { toHex, darken, lighten, toRgb } from '@hbis/color';

const shortId = require('shortid');

const initialState =
{
  counter: 0,
  data: {
    "selectedColors": {
      "primaryColors": [
        {
          "id": `${shortId.generate()}`,
          "hexColor": "#000000",
          "rgbColor": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
          }
        },
      ],
      "secondaryColors": [
        {
          "id": `${shortId.generate()}`,
          "hexColor": "#ffffff",
          "rgbColor": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        },
      ]
    },
    "selectedWCAGLevels": {
      "aa": false,
      "aaa": false
    },
    "report": {
      "tabs": [

      ]
    },
    "contrastSuggestion": {

      "previous": {
        "baseColor": {},
        "comparedColor": {},
        "wcagLevelPassStatusList": [],
        "totalAaCount": '',
        "totalAaaCount": '',
        "contrastRatio": ""
      },
      "current": {
        "baseColor": {},
        "comparedColor": {},
        "wcagLevelPassStatusList": [],
        "totalAaCount": '',
        "totalAaaCount": '',
        "contrastRatio": ""
      }
    },
    "help": {
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

  return state;
};

export default rootReducer;