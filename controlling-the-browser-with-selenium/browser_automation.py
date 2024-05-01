from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


# Specify the path to the driver
PATH = "/Users/easyres/Desktop/chromedriver-mac-arm64/chromedriver"  # Change this to your driver's location

# Create a WebDriver instance
driver = webdriver.Chrome(PATH)

# Open a website
driver.get("http://neptune-consumer-dev.packageservice.in")

input_element = driver.find_element(By.CSS_SELECTOR, "#mat-input-0")
input_element.send_keys("reman.sharma@easyres.in")

time.sleep(2)

input_element = driver.find_element(By.CSS_SELECTOR, "#mat-input-1")
input_element.send_keys("123")

# Click the button
button = driver.find_element(By.CSS_SELECTOR, "body > app-root > app-login > mat-card > mat-card-content > form > button")
button.click()


time.sleep(2)

button = driver.find_element(By.CSS_SELECTOR, "body > app-root > app-pages > app-navbar > div > div > button:nth-child(2) > span.mat-button-wrapper > div > span")
button.click()

time.sleep(2)


link = "#mat-menu-panel-3 > div > span > li:nth-child(3)"
button = driver.find_element(By.CSS_SELECTOR, link)
button.click()


# BOOK BUTTON
link = "#mat-menu-panel-5 > div > span > li"
button = driver.find_element(By.CSS_SELECTOR, link)
button.click()

time.sleep(2)

# SEARCH PAGES OPENS HERE


link = "#mat-input-0"
button = driver.find_element(By.CSS_SELECTOR, link)
button.click()


input_element = driver.find_element(By.CSS_SELECTOR, "#mat-input-0")
input_element.send_keys("nzm")




time.sleep(10)

# Close the browser
driver.quit()

