package stepDefinitions;

import pageObjects.LoginPage;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.*;
import io.cucumber.java.en.*;
import io.cucumber.junit.*;
import com.google.j2objc.annotations.Property;


@RunWith(Cucumber.class)
public class Steps extends Base{
	
	@Before //cucumber class cant extend base class
	public void setup() throws IOException
	{
		log=Logger.getLogger(Steps.class.getName());
		PropertyConfigurator.configure("log4j.properties");
		log.info("launching browser");
		prop=new Properties();
		FileInputStream fis=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\data.properties");
		prop.load(fis);
		//mvn -Dbrowser=chrome
		//String browser = System.getProperty("browser");
		String browser = prop.getProperty("browser");
		if(browser.contains("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe");
			ChromeOptions options=new ChromeOptions();
			if(browser.contains("headless"))
			{
			options.addArguments("headless");
			}
			driver=new ChromeDriver(options);
			
		}
		else if(browser.equals("firefox"))
		{
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\Drivers\\geckodriver.exe");
			driver=new FirefoxDriver();
		}
		
		
	}

	@Given("^User Initialize the browser with chrome$")
	public void user_Initialize_the_browser_with_chrome() throws Throwable {
		driver=initializerDriver();		
		lp=new LoginPage(driver);
    }
	
    @When("^User opens \"([^\"]*)\" site$")
    public void user_opens_something_site(String url) throws Throwable {
        log.info("opening URL");
    	driver.get(url);
        driver.manage().window().maximize();
    }
    
    @And("^User enters Username as \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void user_enters_Username_as_and_Password(String userName, String password) throws Throwable {
    	log.info("entering login information");
    	lp.setUserName(userName);
    	lp.setPassword(password);  
    }
    
    @And("^Click on Login$")
    public void click_on_login() throws Throwable {
    	log.info("cliking on login");
    	lp.clickLogin();
        
    }
    
    @Then("^Login page Title Should be \"([^\"]*)\"$")
    public void login_page_Title_Should_be(String title) throws Throwable {
    	if(driver.getPageSource().contains("unsucessful")) {
    		driver.close();
    	}else {
    		Assert.assertTrue(driver.getTitle().contains(title));
    	}
    }

    @When("^User click on Logout link$")
    public void user_click_on_logout_link() throws Throwable {
    	Thread.sleep(3000);
    	lp.clickLogout();
    	Thread.sleep(3000);
        
    }

    @Then("^Logout page Title should be \"([^\"]*)\"$")
    public void logout_page_Title_should_be(String title) throws Throwable {
    	Assert.assertTrue(driver.getTitle().contains(title));
    }
 
    @When("^User click on Customers menu item$")
    public void user_click_on_Customers_menu_item() throws Throwable {

    }

    @When("^Click on Add new buttom$")
    public void click_on_Add_new_buttom() throws Throwable {

    }

    @Then("^User can view Add new customer page$")
    public void user_can_view_Add_new_customer_page() throws Throwable {

    }

    @When("^User enter customer information$")
    public void user_enter_customer_information() throws Throwable {

    }

    @When("^Click on Save button$")
    public void click_on_Save_button() throws Throwable {

    }

    @Then("^User can view confirmation massage \"([^\"]*)\"$")
    public void user_can_view_confirmation_massage(String arg1) throws Throwable {

    }
    @And("^Close browsers$")
    public void close_browsers() throws Throwable {
    	log.info("closing the browser");
    	driver.quit(); 
    }


}
