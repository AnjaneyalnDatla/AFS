
export var tablecolumns = [
    { columnDef: 'transaction_number', sort: true, header: 'Transaction No.', cell: (element: any) => `${element.transaction_number}` },
    { columnDef: 'transactionStatus.value', sort: true, header: 'Transaction Status', cell: (element: any) => `${element.transactionStatus.value}` },
    { columnDef: 'contact.companyName', sort: true, header: 'Company Name', cell: (element: any) => `${element.contact.companyName}` },
    { columnDef: 'contact.firstName', sort: true, header: 'First Name', cell: (element: any) => `${element.contact.firstName}` },
    { columnDef: 'contact.lastName', sort: true, header: 'Last Name', cell: (element: any) => `${element.contact.lastName}` },
    { columnDef: 'paymentAmount', sort: true, header: 'Amount', cell: (element: any) => `${element.paymentAmount}` },
    { columnDef: 'creationdate', sort: true, header: 'Date', cell: (element: any) => `${element.creationdate}` },
    { columnDef: 'actions', sort: false, header: 'Actions', cell: (element: any) => `${element.actions}` },
];

export var contactcolumns = [
    { columnDef: 'firstName', sort: true, header: 'First Name', cell: (element: any) => `${element.firstName}` },
    { columnDef: 'lastName', sort: true, header: 'Last Name', cell: (element: any) => `${element.lastName}` },
    { columnDef: 'companyName', sort: true, header: 'Company Name', cell: (element: any) => `${element.companyName}` },
    { columnDef: 'isCompany', sort: true, header: 'Company?', cell: (element: any) => `${element.isCompany}` },
    { columnDef: 'emailAddress', sort: true, header: 'Email', cell: (element: any) => `${element.emailAddress}` },
    { columnDef: 'cellPhone', sort: true, header: 'Cell Phone', cell: (element: any) => `${element.cellPhone}` },
    { columnDef: 'actions', sort: false, header: 'Actions', cell: (element: any) => `${element.actions}` },
];

export var accountcolumns = [
    { columnDef: 'name', sort: true, header: 'Account Name', cell: (element: any) => `${element.name}` },
    { columnDef: 'account_type.name', sort: true, header: 'Type', cell: (element: any) => `${element.account_type.name}` },
    { columnDef: 'account_type.accountCategory.name', sort: true, header: 'Accounting Type', cell: (element: any) => `${element.account_type.accountCategory.name}` },
    { columnDef: 'currentBalance', sort: true, header: 'Balance', cell: (element: any) => `${element.currentBalance}` },
    { columnDef: 'isActive', sort: true, header: 'Status', cell: (element: any) => `${element.isActive}` },
    { columnDef: 'actions', sort: false, header: 'Actions', cell: (element: any) => `${element.actions}` },
];

export var reportcolumns = [
    { columnDef: 'id', sort: true, header: 'Id', cell: (element: any) => `${element.id}` },
    { columnDef: 'type', sort: true, header: 'Type', cell: (element: any) => `${element.type}` },
    { columnDef: 'name', sort: true, header: 'Name', cell: (element: any) => `${element.name}` },
    { columnDef: 'price', sort: true, header: 'Price', cell: (element: any) => `${element.price}` },
    { columnDef: 'quantity', sort: true, header: 'Quantity', cell: (element: any) => `${element.quantity}` },
    { columnDef: 'total', sort: true, header: 'Total', cell: (element: any) => `${element.total}` },
];

export var usercolumns = [
    { columnDef: 'firstName', sort: true, header: 'First Name', visibility: true, cell: (element: any) => `<b>${element.firstName}</b>` },
    { columnDef: 'lastName', sort: true, header: 'Last Name', visibility: true, cell: (element: any) => `<b>${element.lastName}</b>` },
    { columnDef: 'username', sort: true, header: 'User Name', visibility: true, cell: (element: any) => `<b>${element.username}</b>` },
    { columnDef: 'role', sort: true, header: 'Role', visibility: true, cell: (element: any) => `<b>${element.realmRoles}</b>` },
    { columnDef: 'email', sort: true, header: 'Email', visibility: true, cell: (element: any) => `<b>${element.email}</b>` },
    { columnDef: 'enabled', sort: false, header: 'Status', visibility: true, cell: (element: any) => `<button mat-raised-button class="btn btn-success btn-sm">${element.enabled}</button>` },
    { columnDef: 'actions', sort: false, header: 'Actions', visibility: false, cell: (element: any) => `${element.actions}` },
];

export var userrolescolumns = [
    { columnDef: 'role', sort: true, header: 'Role', cell: (element: any) => `${element.name}` },
    { columnDef: 'description', sort: true, header: 'Description', cell: (element: any) => `${element.description}` },
    { columnDef: 'actions', sort: true, header: 'Actions', cell: (element: any) => `${element.actions}` },
];