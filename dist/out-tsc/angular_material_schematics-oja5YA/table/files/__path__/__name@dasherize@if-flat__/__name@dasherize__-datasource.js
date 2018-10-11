"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = require("@angular/cdk/collections");
var material_1 = require("@angular/material");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
interface < ;
classify(name) %  > Item;
{
    name: string;
    id: number;
}
// TODO: replace this with real data from your application
var EXAMPLE_DATA;
 %  > Item[];
[
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the <%= classify(name) %> view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
(name) %  > collections_1.DataSource;
collections_1.DataSource << ;
classify(name) %  > Item > {
    data: , classify: function (name) { }
} %  > Item[];
EXAMPLE_DATA;
constructor(private, paginator, material_1.MatPaginator, private, sort, material_1.MatSort);
{
    _this = _super.call(this) || this;
}
/**
 * Connect this data source to the table. The table will only update when
 * the returned stream emits new items.
 * @returns A stream of the items to be rendered.
 */
connect();
rxjs_1.Observable << ;
classify(name) %  > Item[] > {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const: dataMutations = [
        rxjs_1.of(this.data),
        this.paginator.page,
        this.sort.sortChange
    ],
    // Set the paginators length
    this: .paginator.length = this.data.length,
    return: rxjs_1.merge.apply(void 0, dataMutations).pipe(operators_1.map(function () {
        return _this.getPagedData(_this.getSortedData(_this.data.slice()));
    }))
};
/**
 *  Called when the table is being destroyed. Use this function, to clean up
 * any open connections or free any held resources that were set up during connect.
 */
disconnect();
{ }
getPagedData(data, , classify(name) %  > Item[]);
{
    var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
}
getSortedData(data, , classify(name) %  > Item[]);
{
    if (!this.sort.active || this.sort.direction === '') {
        return data;
    }
    return data.sort(function (a, b) {
        var isAsc = _this.sort.direction === 'asc';
        switch (_this.sort.active) {
            case 'name': return compare(a.name, b.name, isAsc);
            case 'id': return compare(+a.id, +b.id, isAsc);
            default: return 0;
        }
    });
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//# sourceMappingURL=__name@dasherize__-datasource.js.map