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


class Feature_Search_Service_NSW_location {

	@Keyword
	def FeatureSearchServiceLocation(String action) {
		KeywordUtil.logInfo("===Open Website===")
		WebUI.openBrowser('')
		WebUI.navigateToUrl(GlobalVariable.Url_service_centre)
		WebUI.delay(10)

		//Find a Service NSW location, should use service centre named as "Marrickville Service Centre"  with some suburb data//

		if	(action == "Search Service NSW Location") {

			KeywordUtil.logInfo("===Input some suburb data===")
			WebUI.setText(findTestObject('Page/Find Location Page/Input_Location_Search'), (findTestData ('Test_Data').getValue('Suburb', 1)))

			KeywordUtil.logInfo("=====Take Screen Shoot======")
			WebUI.takeScreenshot()

			KeywordUtil.logInfo("===Click Button Search===")
			WebUI.click(findTestObject('Page/Find Location Page/Button_Location_Search'))

			KeywordUtil.logInfo("===Validation User Get Location Service Named as 'Marrickville Service Centre'===")
			WebUI.verifyElementText(findTestObject('Page/Find Location Page/P_Result_Search_Location'), (findTestData ('Test_Data').getValue('ServiceLocation', 1)))

			KeywordUtil.logInfo("=====Take Screen Shoot======")
			WebUI.takeScreenshot()
		}

		else if (action == "InvalidSearch") {

			KeywordUtil.logInfo("===Input Invalid suburb data===")
			WebUI.setText(findTestObject('Page/Home Page'), GlobalVariable.InvalidSearchService)

			KeywordUtil.logInfo("===Click Button Search===")
			WebUI.click(findTestObject('Page/Find Location Page/Button_Location_Search'))

			KeywordUtil.logInfo("=====Take Screen Shoot======")
			WebUI.takeScreenshot()

			KeywordUtil.logInfo("===Validation User Get Error Message 'We couldn't find that suburb or postcode.'===")
			WebUI.verifyElementText(findTestObject('Page/Find Location Page/P_ErrorAlert'), "We couldn't find that suburb or postcode.")

			KeywordUtil.logInfo("=====Take Screen Shoot======")
			WebUI.takeScreenshot()
		}
	}
}