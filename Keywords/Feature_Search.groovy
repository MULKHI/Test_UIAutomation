import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI


class Feature_Search {

	@Keyword
	def FeatureSearchApp(String action) {
		KeywordUtil.logInfo("===Open Website===")
		WebUI.openBrowser('')
		WebUI.navigateToUrl(GlobalVariable.Url)
		WebUI.delay(10)

		if	(action == "Search") {

			KeywordUtil.logInfo("===Input keyword match existing content===")
			WebUI.setText(findTestObject('Page/Home Page/Input_Search'), GlobalVariable.ValidSearch)

			KeywordUtil.logInfo("=====Take Screen Shoot======")
			WebUI.takeScreenshot()

			KeywordUtil.logInfo("===Click Button Search===")
			WebUI.click(findTestObject('Page/Home Page/Button_Search'))

			KeywordUtil.logInfo("===Validation Users Get Some Related Content===")
			def text = WebUI.getText(findTestObject('Page/Home Page/P_Result Related Content'))
			WebUI.verifyMatch(text, '92 results found for ‘Apply for a number plate’', true, FailureHandling.STOP_ON_FAILURE)

			KeywordUtil.logInfo("=====Take Screen Shoot======")
			WebUI.takeScreenshot()
			WebUI.closeBrowser()
		}

		else if (action == "InvalidSearch") {

			KeywordUtil.logInfo("===Input keyword NOT match existing content===")
			WebUI.setText(findTestObject('Page/Home Page/Input_Search'), GlobalVariable.InvalidSearch)

			KeywordUtil.logInfo("=====Take Screen Shoot======")
			WebUI.takeScreenshot()

			KeywordUtil.logInfo("===Click Button Search===")
			WebUI.click(findTestObject('Page/Home Page/Button_Search'))

			KeywordUtil.logInfo("===Validation Users NOT Get Some Related Content===")
			WebUI.verifyElementText(findTestObject('Page/Home Page/P_ErrorMsg'), 'Search again using different keywords.')

			KeywordUtil.logInfo("=====Take Screen Shoot======")
			WebUI.takeScreenshot()
			WebUI.closeBrowser()
		}
	}
}