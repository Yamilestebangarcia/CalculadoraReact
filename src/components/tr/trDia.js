function TrDia({ td1, td2, id }) {
  return (
    <tr key={"actual" + id}>
      <td>{td1}</td>
      <td>{td2}</td>
    </tr>
  );
}

export default TrDia;
