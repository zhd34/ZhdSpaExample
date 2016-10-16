This is a sample project I gain practical experiences of building Single Page Appication with AngularJS. 
Visual Studio Community 2015

How is works:
1. Login details: 
User name: admin
Password: 123123

2. Products page: A list of current products with Edit/Delete/Place Order actions of each item. An Add Product button. Only logged in user can add, edit and delete products. 
Click 'Place Order' button to popup the order dialog and then submit an order, after a successful submission, the current view will be redirect to Orders tab to view the order list.

3. Orders page: A list of current orders with View and Delete actions of each item. Only logged in user can delete orders.

Structure: /scripts/Spa - Single page application root path.

/scripts/Spa/app.js - Start up and routing entry.

/scripts/Spa/module - Containers of all referenced components.

/scripts/Spa/services/common.js - Custom util component.
/scripts/Spa/services/dataService.js - Data storage component, uses cookie to store products and orders data.
/scripts/Spa/services/membershipService.js - Validates login credential, gets current logged user, and handles other authentication activities.

/scripts/Spa/home/rootCtrl.js - root controller which is referenced in Index.cshtml

/scripts/Spa/layout - directives and corresponding templates.