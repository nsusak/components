import Table from "./Table";
import useSort from "../hooks/use-sort";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => {
        return (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortColumn(column.label)}
          >
            <div className="flex items-center">
              {" "}
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        );
      },
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <GoArrowUp />;
  } else if (sortOrder === "desc") {
    return <GoArrowDown />;
  }
}

export default SortableTable;
