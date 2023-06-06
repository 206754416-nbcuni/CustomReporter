import "./table.scss";

const Table = ({data_, length}) => {

  function getRows(){
    console.log(data_)
    var rows = []
    for(let i = 0; i< length; i++){
      let temp = <tr>
      <td>{data_[i].month}</td>
      <td>{data_[i].release}</td>
      <td>{data_[i].newlyDevelopedScripts}</td>
      <td>{data_[i].noOfScriptsEnhanced}</td>
      <td>{data_[i].noOfValidScripts}</td>
      <td>{data_[i].costSavings}</td>
      <td>{data_[i].effortsSavings}</td>
      </tr>
      rows.push(temp)
    }
    console.log(rows)
    return rows
  }
  return (
    <div className="table">
      <table className="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Release</th>
      <th scope="col">Newly Developed Scripts</th>
      <th scope="col">No.Of Scripts Enhanced</th>
      <th scope="col">No.Of Valid Scripts</th>
      <th scope="col">Cost Savings</th>
      <th scope="col">Efforts Savings</th>
    </tr>
  </thead>
  <tbody>
    {
      getRows()
        // data_.map((d)=>(
        //   <tr>
        //   <td>{d.month}</td>
        //   <td>{d.release}</td>
        //   <td>{d.newlyDevelopedScripts}</td>
        //   <td>{d.noOfScriptsEnhanced}</td>
        //   <td>{d.noOfValidScripts}</td>
        //   <td>{d.costSavings}</td>
        //   <td>{d.effortsSavings}</td>
        //   </tr>
        // ))
    }
  </tbody>
</table>
    
    </div>
  )
}

export default Table