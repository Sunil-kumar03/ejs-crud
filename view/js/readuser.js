const userDOM = document.querySelector('#users');

(function(){
    fetch(`http://localhost:4500/api/user/all`,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    }).then(out =>out.json())
    .then(res =>{
        console.log('users data =',res)
        printData(res.users)
    }).catch(err =>console.log(err.message))
})()

//print user data
function printData(users){
    users.forEach((item)=>{
        userDOM.innerHTML += `<div class="col-md-4 mt-2 mb-2">
       <div class="card">
           <div class="card-header">
              <h4 class="text-success text-uppercase">${item.name}</h4>
            </div>
            <div class="card-body">
              <ul class="list-group">
                    <li class="list-group-item">
                        <strong>Email</strong>
                        <span class="float-end text-success">${item.email}</span>
                    </li>
                    <li class="list-group-item">
                        <strong>Mobile</strong>
                        <span class="float-end text-success">${item.mobile}</span>
                    </li>
                    <li class="list-group-item">
                        <strong>Address</strong>
                        <span class="float-end text-success">${item.address}</span>
                    </li>
              </ul>
            </div>
            <div class="card-footer">
                <a href="/edit?id=${item._id}" class="btn btn-info">Edit</a>
                <button class="btn btn-danger float-end">Delete</button>
            </div>
        </div>
    </div>`
    })
}