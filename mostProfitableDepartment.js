

function mostProfitableDepartment(data) {
    let highestSales = 0;
     let highestDepartment = "";
     let highestDepartment2 = "";


    // for (let de in data) {
    //     const curr = salesData2[de];
        
    //     if (curr.sales > highestSales) {
    //       highestSales = curr.sales;
    //       highestDepartment2 = curr.department;
    //     } 
        
    //   }
    
    for (let dep in data) {
      const current = data[dep];
      
      if (current.sales > highestSales) {
        highestSales = current.sales;
        highestDepartment = current.department;
      } 
      if (current === null) {
        highestDepartment = "empty data!"
    }
}
      
    
    
    return highestDepartment;
  }
mostProfitableDepartment(salesData2)