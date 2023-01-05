$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search.feature");
formatter.feature({
  "name": "Search",
  "description": "  I want to use Search Feature for find existing content",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open browser home page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearch_StepDef.I_Open_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search using keyword match existing content",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input keyword match existing content \u0027Apply for a number plate\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearch_StepDef.Input_keyword_match_existing_content()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearch_StepDef.Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Users Get Some Related Content",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearch_StepDef.Verify_Users_Get_Some_Related_Content()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Open browser home page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearch_StepDef.I_Open_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search using keyword not match existing content",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "Input keyword NOT match existing content \u0027Indonesia\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearch_StepDef.Input_keyword_NOT_match_existing_content()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearch_StepDef.Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Users NOT Get Some Related Content",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearch_StepDef.Verify_Users_NOT_Get_Some_Related_Content()"
});
formatter.result({
  "status": "passed"
});
});