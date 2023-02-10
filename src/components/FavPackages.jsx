const FavPackages =(props)=>{
    const data= props.data;

    return(
        <><table>
        <thead>
          <tr>
            <th>Name</th>
         
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={index}>
              <td>{item.fav.package.name}</td>
             
              <td>
                <button  value={item.fav.package.name} onClick={props.handleDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> </>
    )
}
export default FavPackages;