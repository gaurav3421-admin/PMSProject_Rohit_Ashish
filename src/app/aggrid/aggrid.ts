import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridAngular, AgGridModule } from 'ag-grid-angular'; // STEP 1 Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // STEP 1 Column Definition Type Interface
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';  // STEP 1 Angular Data Grid Component


// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);  // STEP 1 Angular Data Grid Component

@Component({
  selector: 'app-aggrid',
  imports: [AgGridAngular, AgGridModule, CommonModule], // STEP 2 - Import AgGridAngular and AgGridModule
  templateUrl: './aggrid.html',
  styleUrl: './aggrid.css',
})
export class AGGrid {

  isBrowser: boolean;

  constructor() {
    this.isBrowser = typeof window !== 'undefined';
  }

  // Column Definitions: Defines the columns to be displayed.
  // Step 3: Define the column definitions for the AG Grid
  colDefs: ColDef[] = [
    { field: "make", filter: true, editable: true },
    { field: "model", filter: true, editable: true },
    { field: "price", filter: true, editable: true },
    { field: "electric", filter: true, editable: true }
  ];

  // Row Data: Defines the data to be displayed in the grid.
  // Step 4: Define the row data for the AG Grid
  rowData: any[] = Array.from({ length: 200 }, (_, i) => {
    const makes = ['Toyota', 'Ford', 'Porsche', 'BMW', 'Audi'];
    const models: Record<string, string[]> = {
      Toyota: ['Corolla', 'Camry', 'Celica'],
      Ford: ['Mondeo', 'Focus', 'Mustang'],
      Porsche: ['Boxster', '911', 'Cayenne'],
      BMW: ['3 Series', '5 Series', 'X5'],
      Audi: ['A3', 'A4', 'Q7']
    };
    const make = makes[i % makes.length];
    const modelList = models[make];
    const model = modelList[i % modelList.length];
    const basePrice: Record<string, number> = { Toyota: 20000, Ford: 25000, Porsche: 70000, BMW: 40000, Audi: 35000 };
    const price = (basePrice[make] || 30000) + (i % 20) * 150;
    const electric = (make === 'Porsche' && model === 'Boxster') || (i % 17 === 0);
    return { make, model, price, electric };
  });
}
