package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utilities.WaitHelper;

public class LoginPage {
	public WebDriver driver;
	WaitHelper waithelper;
	public LoginPage(WebDriver driver) {
		this.driver=driver;
		 PageFactory.initElements(driver, this);
		 waithelper=new WaitHelper(driver);
	}
	@FindBy(how = How.ID,using ="Email")
	@CacheLookup
	private WebElement txtEmail;
	
	@FindBy(id ="Password")
	@CacheLookup
	private WebElement txtPassword;
	
	@FindBy(xpath ="//*[text()='Log in']")
	@CacheLookup
	private WebElement btnLogin;
	
	@FindBy(xpath ="//*[text()='Logout']")
	@CacheLookup
	private WebElement btnLogout;
	
	public void setUserName(String name) {
		txtEmail.clear();
		txtEmail.sendKeys(name);
	}
	
	public void setPassword(String password) {
		txtPassword.clear();
		txtPassword.sendKeys(password);
	}
	
	public void clickLogin() {
		btnLogin.click();
	}
	
	public void clickLogout() {
		waithelper.WaitForElement(btnLogout, 30);
		btnLogout.click();
	}
	
	

}
