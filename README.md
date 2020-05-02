# QA_KA-75
The KA-75 group's repository for the QA course (KPI).  

Tasks to complete:  
## Task 1  
Напишите свою имплементацию двусвязного списка, метод Add, GetCurrent, GetNext, GetPrevious.  
*Folder*: `Task1_DoublyLinkedList`.  

## Task 2  
Write С# CompareVersions() method, which takes as parameters 2 strings. These strings are product versions. Product version consists of unlimited versions and subversions. Pattern for version is numbers and dot delimiters. If first version is greater than second method returns 1, if equals 0, if less -1.
Examples:  
`str1 = “1.2.3” str2 = “4.5.6” return -1`  
`str1 = “1” str2 = “1.0” return 0`  
`str1 = “1.1.0” str2 = “1.0.1” return 1`   

*Folder*: `Task2_CompareVersions`.  

## Selenium Webdriver  
The website to test is [www.sportlife.com](https://www.sportlife.ua/uk).  
To run all tests at once, enter `npm run runner`.   
To run one test, change `NAME_OF_FILE` in `package.json`:  
```
"scripts": {
    "test": "node ./node_modules/mocha/bin/mocha tests/NAME_OF_FILE.js --timeout 100000"
}
```  
... and enter `npm test`.  
Results can be found in the `results/tests` folder.  

*Folder*: `TestAutomation_WebDriver`.  

## Selenium PageObject  
The website to test is [www.sportlife.com](https://www.sportlife.ua/uk).  
To run all tests at once, enter `npm run runner`.   
To run one test, change `NAME_OF_FILE` in `package.json`:  
```
"scripts": {
    "test": "node ./node_modules/mocha/bin/mocha tests/NAME_OF_FILE.js --timeout 100000"
}
```  
... and enter `npm test`.  
Results can be found in the `results` folder.  

*Folder*: `TestAutomation_PageObject`.  
