Telerik.Sitefinity.Samples.Corporate
====================================

The Corporate Starter Kit showcases all Sitefinity features available out of the box in a aestethically designed Quantum Portable Computers website. This starter kit is designed to help business users get up to speed quickly using Sitefinity and gives developers a way to easily add custom features to it. The Quantum website is perfect for doing Sitefinity demos to project stakeholders. 


The Corporate Starter Kit is an online store build on the ECommerce module. You can browse the products available in the store and look at their descriptions. You can also go to the shop section and add products to your shopping cart. In the backend, you can edit the properties of all products available in the store. The starter kit comes with two language versions - English and Spanish. 


### Requirements

* Sitefinity 6.3 license

* .NET Framework 4

* Visual Studio 2012

* Microsoft SQL Server 2008R2 or later versions


### Prerequisites

You need to attach the database backup files to your SQL Server. To do this:

1. Navigate to the _SitefinityWebApp_ -> *App_Data* folder.
2. Unzip the **CorporateDB.zip** file.
2. In SQL Management Studio, open the context menu of _Databases_ and click _Attach..._
2. Click the _Add..._ button and navigate to the folder where you unzipped the **CorporateDB.zip** file.
3. Select the **SitefinityCorporateStarterKit.mdf** file and click _OK_.
4. Click _OK_.




### Installation instructions: SDK Samples from GitHub

1. Clone the [Telerik.Sitefinity.Samples.Dependencies](https://github.com/Sitefinty-SDK/Telerik.Sitefinity.Samples.Dependencies) repo to get all assemblies necessary to run for the samples.
2. Fix broken references in the class libraries, for example in **SitefinityWebApp** and **Telerik.Sitefinity.Samples.Common**:

  1. In Solution Explorer, open the context menu of your project node and click _Properties_.  
  
    The Project designer is displayed.
  2. Select the _Reference Paths_ tab page.
  3. Browse and select the folder where **Telerik.Sitefinity.Samples.Dependencies** folder is located.
  4. Click the _Add Folder_ button.


3. In Solution Explorer, navigate to _SitefinityWebApp_ -> *App_Data* -> _Sitefinity_ -> _Configuration_ and select the **DataConfig.config** file. 
4. Modify the **connectionString** value to match your server address.
5. Build the solution.

### Login

To login to Sitefinity backend, use the following credentials: 

**Username:** admin

**Password:** password

### Additional resources

[Corporate starter kit](http://www.sitefinity.com/resources/tools/starter-kits/corporate)
