console.log("hii");

let finalData = [];

const tableBody = document.querySelector('#table-body');
console.log(tableBody);


$modal = document.querySelector('.modal');

$modalId = document.querySelector('.modal-title');

$modalTitle = document.querySelector('.modal-text');

$modalCloseButton = document.querySelector('.modal-close-button');



document.body.addEventListener('click',(event)=>{

    if(event.target.id ==='button'){
        console.log("button clicked");
        const id = event.target.dataset.id;
        console.log("button id =", id);
        
        finalData.forEach((post) => {
           if(id === String(post.id)){
                console.log("in if");
                console.log("post id is:",post.id);
                console.log("post-title is:",post.title);
                
                //open the modal with the row info
                $modal.classList.toggle('open-modal');  
                $modalId.value = post.id;
                $modalTitle.value = post.title;

            }
        })
    }
})

$modalCloseButton.addEventListener('click' ,(event) => {
    closeModal(event);
})


function closeModal(event){
    
    $modal.classList.toggle('open-modal');  
}


function printData(data){

   if(data.length > 0){
       
        const data1  = data;
        data1.length = 10;
        
        finalData = data1;
        
        let temp = "";
        
        data1.forEach(post => { 
            
                temp += `
                <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td><Button id="button" data-id=${post.id} class="ui circular teal basic button">Get Post</Button></td>
                </tr>
                `
                
            });
                tableBody.innerHTML = temp;
    }
 
}
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => 
res.json()
)
.then((data) => printData(data))
.catch((error) => {
console.log('Error',error);
});

