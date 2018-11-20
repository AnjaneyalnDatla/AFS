// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    // Context Roots
    identity_contextroot: 'http://206.189.197.225:8085/identity/',
    account_contextroot: 'http://206.189.197.225:8086/accounts/',

    // Context Paths
    identity_validate_url: 'validate',
    sale_vendor_list_url: 'contacts/getVendorList',
    sale_customer_list_url: 'contacts/getCustomerList',
    sale_product_types_url: 'contacts/getProductTypes',
    sales_resource: 'sales',
    contacts_resource: 'contacts',
    transactions_resource: 'transactions'
};
