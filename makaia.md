
+-------------------------------------------------------------------------+
|                          Makaia Hybrid Framework                        |
+-------------------------------------------------------------------------+
|                          Framework Overview:                            |
|                                                                         |
|   The Makaia Hybrid Framework is designed using the Page Object Model   |
|   (POM) approach. It leverages Selenium WebDriver for web application  |
|   interaction, TestNG for test execution, Apache POI for data retrieval |
|   from Excel for supporting multiple data testing, Cucumber for BDD     |
|   automation, and Extent Report for generating HTML automation summary |
|   reports.                                                              |
+-------------------------------------------------------------------------+
|                             Components:                                 |
|                                                                         |
| +-----------------------+    +---------------------------------------+ |
| | Browser and Element   |    |              Utils Package             | |
| | Interfaces            |    | +------------------+  +--------------+ | |
| |                       |    | | DataLibrary      |  | Reporter     | | |
| |                       |    | |                  |  |              | | |
| +-----------+-----------+    | +------------------+  +--------------+ | |
|             |                +---------------------------------------+  |
| +-----------+-----------+                                               |
| | SeleniumBase Library  |                                               |
| |                       |    +-------------------+                      |
| +-----------+-----------+    | ProjectSpecific   |                      |
|             |                | Methods           |                      |
| +-----------+-----------+    |                   |                      |
| | pages Package         |    +-------------------+                      |
| |                       |                                               |
| |                       |    +-------------------+                      |
| |                       |    | pages             |                      |
| +-----------+-----------+    |                   |                      |
|             |                +-------------------+                      |
| +-----------+-----------+    |                   |                      |
| | Testcases Package     |    +-------------------+                      |
| |                       |                                               |
| |                       |    +-------------------+                      |
| |                       |    | Testcases         |                      |
| +-----------------------+    |                   |                      |
|                               +-------------------+                     |
+-------------------------------------------------------------------------+
|                          Hierarchy of Classes:                          |
|                                                                         |
| +--------------------------+                                            |
| | AbstractTestNGCucumber  |                                             |
| | Tests                    |                                            |
| |                          |    +-----------------------+               |
| +------------+-------------+    | DriverInstance        |               |
|              |                 |                       |                |
| +------------+-------------+    +-----------+-----------+               |
| | Reporter                 |                |                           |
| |                          |    +-----------+-----------+               |
| |                          |    | SeleniumBase          |               |
| |                          |    |                       |               |
| +------------+-------------+    +-----------+-----------+               |
|              |                             |                            |
| +------------+-------------+    +-----------+-----------+               |
| | ProjectSpecificMethods  |    | Pages & Testcases    |                 |
| |                          |    |                       |               |
| +--------------------------+    +-----------------------+               |
+-------------------------------------------------------------------------+
|                             Execution Flow:                             |
|                                                                         |
| +------------------------+                                              |
| | @BeforeSuite ->        |                                              |
| |   startReport()        |                                              |
| |                        |                                              |
| |   @BeforeTest ->       |                                              |
| |     setValues()        |                                              |
| |                        |                                              |
| |     @BeforeClass ->    |                                              |
| |       startTestCase()  |                                              |
| |                        |                                              |
| |         @DataProvider  |                                              |
| |          -> fetchData()|                                              |
| |                        |                                              |
| |           @BeforeMethod|                                              |
| |             ->         |                                              |
| |             preCondition()                                            |
| |                        |                                              |
| |             @Test      |                                              |
| |             TestCase   |                                              |
| |                        |                                              |
| |           @AfterMethod |                                              |
| |             ->         |                                              |
| |             postCondition()                                           |
| |                        |                                              |
| |         @AfterClass    |                                              |
| |           -> NA        |                                              |
| |                        |                                              |
| |     @AfterTest -> NA   |                                              |
| |                        |                                              |
| | @AfterSuite ->         |                                              |
| |   endResult()          |                                              |
| +------------------------+                                              |
+-------------------------------------------------------------------------+
