// function selectionSort(arr){
    
//     for(let i = 0;i < arr.length-1 ;i++){
//         let ith = arr[i];
//         let min = arr[i+1];
//         let index = i + 1;
//         for(let j = i + 2; j < arr.length;j++){
//             if(arr[j] < min){
//                 min = arr[j];
//                 index = j;
//             }
//         }
        
//         if( ith > min){
//             let temp = arr[i];
//             arr[i] = arr[index];
//             arr[index] = temp;            
//         }
//     }
//     console.log(arr);
// }

// selectionSort([5,4,3,2,1])

const setTimer = (time) => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve('finish timmer');
        },time);
    })
    return promise;
}

const selectionSort = async () => {
    const divs = document.querySelectorAll('.bar');
    for(let i = 0; i < divs.length-1;i++){
        let ith = parseInt(divs[i].querySelector('label').innerHTML)
        divs[i].style.backgroundColor = 'navy';
        let min = parseInt(divs[i+1].querySelector('label').innerHTML)
        let index = i + 1;
        for(let j = i +1; j<divs.length;j++){
            divs[j].style.backgroundColor = 'red';
            await setTimer(100);
            const compare = parseInt(divs[j].querySelector('label').innerHTML);
            if(compare < min){
                min = compare;
                index = j;
                
            }
            divs[j].style.backgroundColor = 'rgb(0, 183, 255)';

        }

        if(ith > min){
            divs[i].style.backgroundColor = 'brown';
            divs[index].style.backgroundColor = 'red';
            await setTimer(50);

            divs[i].style.backgroundColor = 'rgb(0, 183, 255)';
            divs[index].style.backgroundColor = 'rgb(0, 183, 255)';
            


            divs[i].querySelector('label').innerHTML = min;
            divs[i].style.height = `${min * 4}px`;
            divs[index].querySelector('label').innerHTML = ith;
            divs[index].style.height = `${ith * 4}px`;

            
        }
        divs[i].style.backgroundColor = 'green';


    }
    divs[divs.length - 1].style.backgroundColor = 'green';

}

const main = document.getElementById('elements');
const generateBtn = document.querySelector('.generate-btn')
const sortBtn = document.querySelector('.sort-btn');

const generateBars = () => {
    for(let i = 0; i < 20; i++){
        const number = Math.floor(Math.random() * 100)
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.innerHTML = number;
        div.style.height = `${number * 4}px`;
        div.classList.add("bar");
        // div.style.transform = `translateX(${i * 30}px)`;
        div.append(label);
        main.append(div);
    }
    
}


sortBtn.addEventListener('click',selectionSort);
generateBtn.addEventListener('click',generateBars)

