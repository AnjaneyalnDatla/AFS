// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    // Context Roots
    identity_contextroot: 'http://206.189.197.225:8080/identity/',
    account_contextroot: 'http://206.189.197.225:8082/accounts/',
  
  
    // Context Paths
    identity_validate_url: 'validate',
    contact_save_url: 'contacts',
    sale_vendor_list_url: 'contacts/getVendorList',
    sale_customer_list_url: 'contacts/getCustomerList',
    sale_product_types_url: 'contacts/getProductTypes',
    sale_contact_list: 'contacts/getAllContacts',
    save_sale_url: 'transactions/saveTransaction',
    sales_list_url: 'transactions/getAllTransactions'
    };
    