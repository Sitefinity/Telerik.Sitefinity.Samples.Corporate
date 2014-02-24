<%@ Control Language="C#" %>


<%@ Register Assembly="Telerik.Sitefinity, Version=6.3.5000.0, Culture=neutral, PublicKeyToken=b28c218413bdf563" Namespace="Telerik.Sitefinity.Web.UI.Fields" TagPrefix="sitefinity" %>
<div>
     <asp:Label ID="buttonText" runat="server" Text='<%$Resources:OauthExternalAuthenticationResources, LandingPage %>' />
</div>

<sitefinity:PageField 
            ID="pageField" 
            runat="server"     
            BindOnLoad="false" 
            DisplayMode="Write" 
            WebServiceUrl="~/Sitefinity/Services/Pages/PagesService.svc/"
            CssClass="sfMLeft15 sfMTop5 sfMBottom10" />