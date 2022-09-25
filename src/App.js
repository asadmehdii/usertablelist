import BasicTableComponent from "./Components/basic.table";
import ExpandableTableComponent from "./Components/expandable.table";
import FilterTableComponent from "./Components/filter.table";
import PaginationTableComponent from "./Components/pagination.table";
import SortingTableComponent from "./Components/sorting.table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicTableComponent />
        <FilterTableComponent />
        <PaginationTableComponent />
        <SortingTableComponent />
        <ExpandableTableComponent />
      </header>
    </div>
  );
}

export default App;
