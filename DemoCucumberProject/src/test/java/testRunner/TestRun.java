package testRunner;

import org.junit.runner.RunWith;

//import org.junit.runner.RunWith;
//
//import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

//import io.cucumber.junit.*;

//@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\features",
		glue="stepDefinitions",
		dryRun=false,
		monochrome=true,
		plugin= {"pretty","html:reports/cucumber-html-report",
				"json:reports/cucumber.json",
				"junit:reports/cucumber.xml"},
				//"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
		tags= {"@a"}//
		)



public class TestRun  extends AbstractTestNGCucumberTests {

}
