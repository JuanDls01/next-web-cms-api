import { ColumnType, GenericCellType } from "./types";

type TableProps = {
  widthTable?: string;
  rows: GenericCellType[];
  columns: ColumnType[];
  haveMetaSearch?: boolean;
};

const Table: React.FC<TableProps> = ({
  widthTable,
  rows,
  columns,
  haveMetaSearch = false,
}) => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div
        className={`${widthTable} bg-gray-400 flex flex-col border rounded-2`}
      >
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    {columns?.map((column) => {
                      return (
                        <th
                          key={column.accesor}
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4 text-left"
                        >
                          {column.Header}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows?.map((row, index) => {
                    return (
                      <tr className="border-b" key={index}>
                        {columns.map((column, index) => {
                          return (
                            <td
                              key={index}
                              className="text-sm text-white font-light px-6 py-4 whitespace-nowrap"
                            >
                              {row[column.accesor]}
                            </td>
                          );
                        })}
                        {row.is_active ? (
                          <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            <button>
                              Edit
                              {/* <BiEditAlt /> */}
                            </button>
                            <button>
                              Update
                              {/* <MdDeleteOutline /> */}
                            </button>
                          </td>
                        ) : (
                          <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            <button>Restaurar</button>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;

{
  /* {haveMetaSearch && (
  <th
    scope="col"
    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
  >
    <button>
      <MdSearch />
    </button>
  </th>
)} */
}
