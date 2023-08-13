import "./styling.css";

const Table = ({ sat }) => {

  const mappedData = sat.map((data, id) => {
    return (
      <tr key= "id">
        <td> {data.name} </td>
        <td>{data.type} </td>
        <td>{data.launchDate}</td>
        <td>{data.operational === true ? "active" : "inactive"}</td>
      </tr>
  );
  })

  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {mappedData};
        </tbody>
      </table>
  );
};

export default Table;