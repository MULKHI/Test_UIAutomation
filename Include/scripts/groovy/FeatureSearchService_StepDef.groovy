import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

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

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class FeatureSearchService_StepDef {
	/**
	 * The step definitions for feature search service
	 */
	@Given("I Open Browser Service Centre page")
	def I_Open_Browser_Service_Centre_page() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl(GlobalVariable.Url_service_centre)
		WebUI.delay(10)
		WebUI.takeScreenshot()
	}

	@When("Input some suburb data (.*)")
	def Input_some_suburb_data(String Suburb) {
		WebUI.setText(findTestObject('Page/Find Location Page/Input_Location_Search'), Suburb)
		WebUI.takeScreenshot()
	}

	@When("Input Invalid suburb data (.*)")
	def Input_Invalid_suburb_data(String InvalidSearch) {
		WebUI.setText(findTestObject('Page/Find Location Page/Input_Location_Search'), InvalidSearch)
		WebUI.takeScreenshot()
	}

	@And("Click Search Location Button")
	def Click_Search_Location_Button() {
		WebUI.click(findTestObject('Page/Find Location Page/Button_Location_Search'))
	}

	@Then("Verify I Get Location Service Named as 'Marrickville Service Centre'")
	def Verify_I_Get_Location_Service() {
		WebUI.verifyElementText(findTestObject('Page/Find Location Page/P_Result_Search_Location'), 'Marrickville Service Centre')
		WebUI.takeScreenshot()
	}

	@Then("Verify I Get Error Message 'We couldn't find that suburb or postcode.'")
	def Verify_I_Get_Error_Message() {
		WebUI.verifyElementText(findTestObject('Page/Find Location Page/P_ErrorAlert'), "We couldn't find that suburb or postcode.")
		WebUI.takeScreenshot()
	}
}