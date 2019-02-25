// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  'url': 'https://68.183.156.146:8443/auth',
        'realm': 'AFS',
        'clientId': 'afs-identity'
};
export const environment = {
  production: false,
  keycloak: keycloakConfig,

  // Context Roots
  identity_contextroot: 'http://localhost:8080/identity/',
  account_contextroot: 'http://localhost:8082/accounts/',
  documentor_contextroot: 'http://localhost:8088/',
  
  // Context Paths
  identity_validate_url: 'validate',
  sales_resource: 'sales',
  contacts_resource: 'contacts',
  transactions_resource: 'transactions',
  products_resource: 'products',
  accounts_resource: 'account'
};

