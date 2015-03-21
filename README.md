Telerik.Sitefinity.Samples.Corporate
====================================

[![Build Status](http://sdk-jenkins-ci.cloudapp.net/buildStatus/icon?job=Telerik.Sitefinity.Samples.Corporate.CI)](http://sdk-jenkins-ci.cloudapp.net/job/Telerik.Sitefinity.Samples.Corporate.CI/)

The Corporate Starter Kit project is primarily aimed at developers, as it showcases how a website can be scripted and created programmatically completely from scratch. Thus, the code examples in the kit are ideal for people who need to complete various tasks related to programmatic content and pages creation – for example, content migration scenarios,  testing, or simply taking advantages of the benefits provided by the powerful Sitefinity API.

NOTE: The Corporate Starter Kit differs from the Quantum sample project, which demonstartes the out of the box capabilities of Sitefinity CMS. To explore the Quantum sample project, see [Quantum](https://github.com/Sitefinity-SDK/Telerik.Sitefinity.Samples.Quantum).



The Corporate Starter Kit is an online store build on the ECommerce module. You can browse the products available in the store and look at their descriptions. You can also go to the shop section and add products to your shopping cart. In the backend, you can edit the properties of all products available in the store. The starter kit comes with two language versions - English and Spanish. 


### Requirements

* Sitefinity license
* .NET Framework 4
* Visual Studio 2012
* Microsoft SQL Server 2008R2 or later versions
* Windows Identity Foundation
   NOTE: Depending on the Microsoft OS version you are using, the method for downloading and installing or enabling the identity framework differs:
  * **Windows 7** - download from [Windows Identity Foundation](http://www.microsoft.com/en-us/download/details.aspx?id=17331)
  * **Windows 8** - in the Control Panel, turn on the relevant Windows feature Windows Identity Foundation 3.5* Windows Identity Foundation




### Prerequisites

Clear the NuGet cache files. To do this:

1. In Windows Explorer, open the **%localappdata%\NuGet\Cache** folder.
2. Select all files and delete them.

You need to attach the database backup files to your SQL Server. To do this:

1. Navigate to the _SitefinityWebApp_ -> *App_Data* folder.
2. Unzip the **CorporateDB.zip** file.
2. In SQL Management Studio, open the context menu of _Databases_ and click _Attach..._
2. Click the _Add..._ button and navigate to the folder where you unzipped the **CorporateDB.zip** file.
3. Select the **SitefinityCorporateStarterKit.mdf** file and click _OK_.
4. Click _OK_.


### Nuget package restoration
The solution in this repository relies on NuGet packages with automatic package restore while the build procedure takes place.   
For a full list of the referenced packages and their versions see the [packages.config](https://github.com/Sitefinity-SDK/Telerik.Sitefinity.Samples.Corporate/blob/master/SitefinityWebApp/packages.config) file.    
For a history and additional information related to package versions on different releases of this repository, see the [Releases page](https://github.com/Sitefinity-SDK/Telerik.Sitefinity.Samples.Corporate/releases). 

### Installation instructions: SDK Samples from GitHub


1. In Solution Explorer, navigate to _SitefinityWebApp_ » *App_Data* » _Sitefinity_ » _Configuration_ and select the **DataConfig.config** file. 
2. Modify the **connectionString** value to match your server address.
3. Build the solution.

For version-specific details about the required Sitefinity NuGet packages for this sample application, click on [Releases]
 (https://github.com/Sitefinity-SDK/Telerik.Sitefinity.Samples.Corporate/releases).


### Login

To login to Sitefinity backend, use the following credentials: 
**Username:** admin   
**Password:** password

### Additional resources

[Corporate starter kit](http://www.sitefinity.com/resources/tools/starter-kits/corporate)