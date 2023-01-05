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



class FeatureSearch_StepDef {
	/**
	 * The step definitions for feature search
	 */
	@Given("I Open Browser")
	def I_Open_Browser() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl(GlobalVariable.Url)
		WebUI.delay(10)
	}

	@When("Input keyword match existing content 'Apply for a number plate'")
	def Input_keyword_match_existing_content() {

		WebUI.setText(findTestObject('Page/Home Page/Input_Search'), GlobalVariable.ValidSearch)
		WebUI.takeScreenshot()
	}

	@When("Input keyword NOT match existing content 'Indonesia'")
	def Input_keyword_NOT_match_existing_content() {

		WebUI.setText(findTestObject('Page/Home Page/Input_Search'), GlobalVariable.InvalidSearch)
		WebUI.takeScreenshot()
	}

	@And("Click Search Button")
	def Click_Search_Button() {
		WebUI.click(findTestObject('Page/Home Page/Button_Search'))
	}

	@Then("Verify Users Get Some Related Content")
	def Verify_Users_Get_Some_Related_Content() {
		def text = WebUI.getText(findTestObject('Page/Home Page/P_Result Related Content'))
		WebUI.verifyMatch(text, '92 results found for ‘Apply for a number plate’', true, FailureHandling.STOP_ON_FAILURE)
		WebUI.takeScreenshot()
		WebUI.closeBrowser()
	}

	@Then("Verify Users NOT Get Some Related Content")
	def Verify_Users_NOT_Get_Some_Related_Content() {

		WebUI.verifyElementText(findTestObject('Page/Home Page/P_ErrorMsg'), 'Search again using different keywords.')
		WebUI.takeScreenshot()
		WebUI.closeBrowser()
	}
}