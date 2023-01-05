$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search Service NSW Location.feature");
formatter.feature({
  "name": "Search Service NSW Location",
  "description": "  I want to Search Service NSW Location",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data \u003cSuburb\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Suburb"
      ]
    },
    {
      "cells": [
        "Sydney 2000"
      ]
    },
    {
      "cells": [
        "Sydney South 2000"
      ]
    },
    {
      "cells": [
        "Sydney University 2006"
      ]
    },
    {
      "cells": [
        "Sydney Olympic Park 2127"
      ]
    },
    {
      "cells": [
        "Sydney Domestic Airport 2020"
      ]
    },
    {
      "cells": [
        "Unsw Sydney 2052"
      ]
    },
    {
      "cells": [
        "North Sydney 2060"
      ]
    },
    {
      "cells": [
        "The University Of Sydney 2006"
      ]
    }
  ]
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data Sydney 2000",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_some_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Location_Service()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 FAILED.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat ✽.Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027(D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search Service NSW Location.feature:12)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027Wynyard Service Centre\u0027 and expected text \u0027Marrickville Service Centre\u0027 of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 are NOT matched.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Run Feature File.run(Run Feature File:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1672899178104.run(TempTestSuite1672899178104.groovy:36)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data Sydney South 2000",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_some_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Location_Service()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 FAILED.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat ✽.Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027(D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search Service NSW Location.feature:12)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027Wynyard Service Centre\u0027 and expected text \u0027Marrickville Service Centre\u0027 of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 are NOT matched.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Run Feature File.run(Run Feature File:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1672899178104.run(TempTestSuite1672899178104.groovy:36)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data Sydney University 2006",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_some_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Location_Service()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 FAILED.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat ✽.Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027(D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search Service NSW Location.feature:12)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027Narrabri Service Centre\u0027 and expected text \u0027Marrickville Service Centre\u0027 of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 are NOT matched.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Run Feature File.run(Run Feature File:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1672899178104.run(TempTestSuite1672899178104.groovy:36)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data Sydney Olympic Park 2127",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_some_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Location_Service()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 FAILED.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat ✽.Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027(D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search Service NSW Location.feature:12)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027Auburn Service Centre\u0027 and expected text \u0027Marrickville Service Centre\u0027 of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 are NOT matched.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Run Feature File.run(Run Feature File:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1672899178104.run(TempTestSuite1672899178104.groovy:36)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data Sydney Domestic Airport 2020",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_some_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Location_Service()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data Unsw Sydney 2052",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_some_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Location_Service()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 FAILED.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat ✽.Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027(D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search Service NSW Location.feature:12)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027Haymarket Service Centre\u0027 and expected text \u0027Marrickville Service Centre\u0027 of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 are NOT matched.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Run Feature File.run(Run Feature File:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1672899178104.run(TempTestSuite1672899178104.groovy:36)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data North Sydney 2060",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_some_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Location_Service()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 FAILED.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat ✽.Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027(D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search Service NSW Location.feature:12)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027North Sydney Service Centre\u0027 and expected text \u0027Marrickville Service Centre\u0027 of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 are NOT matched.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Run Feature File.run(Run Feature File:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1672899178104.run(TempTestSuite1672899178104.groovy:36)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Service NSW Location named as \u0027Marrickville Service Centre\u0027 with some suburb data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "Input some suburb data The University Of Sydney 2006",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_some_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Location_Service()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 FAILED.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat ✽.Verify I Get Location Service Named as \u0027Marrickville Service Centre\u0027(D:/Automation Katalon Studio/Jojonomic_Test_UIAutomation/Include/features/Feature Search Service NSW Location.feature:12)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027Narrabri Service Centre\u0027 and expected text \u0027Marrickville Service Centre\u0027 of test object \u0027Object Repository/Page/Find Location Page/P_Result_Search_Location\u0027 are NOT matched.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$6.call(Unknown Source)\r\n\tat FeatureSearchService_StepDef.Verify_I_Get_Location_Service(FeatureSearchService_StepDef.groovy:77)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat Run Feature File.run(Run Feature File:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1672899178104.run(TempTestSuite1672899178104.groovy:36)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Search Find Service NSW location using invalid Suburb",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "Input Invalid suburb data \u003cInvalidSearch\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify I Get Error Message \u0027We couldn\u0027t find that suburb or postcode.\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "InvalidSearch"
      ]
    },
    {
      "cells": [
        "Jakarta 2000"
      ]
    }
  ]
});
formatter.background({
  "name": "Open browser Service Centre page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I Open Browser Service Centre page",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.I_Open_Browser_Service_Centre_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Find Service NSW location using invalid Suburb",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "Input Invalid suburb data Jakarta 2000",
  "keyword": "When "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Input_Invalid_suburb_data(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Location Button",
  "keyword": "And "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Click_Search_Location_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify I Get Error Message \u0027We couldn\u0027t find that suburb or postcode.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "FeatureSearchService_StepDef.Verify_I_Get_Error_Message()"
});
formatter.result({
  "status": "passed"
});
});