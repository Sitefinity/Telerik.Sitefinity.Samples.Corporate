Telerik.Sitefinity.Samples.Corporate
====================================

[![Build Status](http://sdk-jenkins-ci.cloudapp.net/buildStatus/icon?job=Telerik.Sitefinity.Samples.Corporate.CI)](http://sdk-jenkins-ci.cloudapp.net/job/Telerik.Sitefinity.Samples.Corporate.CI/)

The Corporate Starter Kit showcases all Sitefinity features available out of the box in a aestethically designed Quantum Portable Computers website. This starter kit is designed to help business users get up to speed quickly using Sitefinity and gives developers a way to easily add custom features to it. The Quantum website is perfect for doing Sitefinity demos to project stakeholders. 


The Corporate Starter Kit is an online store build on the ECommerce module. You can browse the products available in the store and look at their descriptions. You can also go to the shop section and add products to your shopping cart. In the backend, you can edit the properties of all products available in the store. The starter kit comes with two language versions - English and Spanish. 


### Requirements

* Sitefinity license

* .NET Framework 4

* Visual Studio 2012

* Microsoft SQL Server 2008R2 or later versions



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




### Installation instructions: SDK Samples from GitHub


1. In Solution Explorer, navigate to _SitefinityWebApp_ -> *App_Data* -> _Sitefinity_ -> _Configuration_ and select the **DataConfig.config** file. 
2. Modify the **connectionString** value to match your server address.
3. Build the solution.

The project refers to the following NuGet packages:

**OauthExternalAuthentication** library

*	Telerik.Sitefinity.Core.nupkg

*	Telerik.DataAccess.Core.nupkg

*	Telerik.Sitefinity.SDK.DotNetOpenAuth.4.3.1.nupkg

**SitefinityWebApp** library

*	Telerik.Sitefinity.All.nupkg


You can find the packages in the official [Sitefinity NuGet Server](http://nuget.sitefinity.com).

### Login

To login to Sitefinity backend, use the following credentials: 

**Username:** admin

**Password:** password

### Additional resources

[Corporate starter kit](http://www.sitefinity.com/resources/tools/starter-kits/corporate)
