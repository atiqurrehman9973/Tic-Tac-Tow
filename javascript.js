let para = document.querySelector('.para');
let inner = document.querySelector('#inner-child2');
let boxes = document.querySelectorAll('.boxes');
let btn = document.querySelector('#btn')
let main = document.querySelector('main');
let header = document.querySelector('header');
let bts = document.querySelector('#bts');
let headerh1 = document.querySelector('.header h1')
let turnO = true;
let array = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// as for each loopt cant applied on single element so i cant used it on inner container because it si single element . so we should apply on list such as boxes
boxes.forEach((box) => {
    console.log(box);
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerHTML = '0'
            para.innerHTML = 'X turn'
            turnO = false;
            box.style.pointerEvents = 'none'

        }
        else {
            box.innerHTML = 'X'
            para.innerHTML = 'O turn'
            turnO = true;
            box.style.pointerEvents = 'none'

        }
        checkWinner();
    })
});
checkWinner = () => {
    for (let arrays of array) {
        let pos1val = boxes[arrays[0]].innerText;
        let pos2val = boxes[arrays[1]].innerText;
        let pos3val = boxes[arrays[2]].innerText;
        if (pos1val != '' && pos2val != '' && pos3val != '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log('winner')
                para.innerHTML = `${pos1val} is winner`;
headerh1.innerHTML = `Congratulation, ${pos1val} is winner`;
                disds();
                black();
            }
        }

    }


}
const disds = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = 'none'
    })
}
btn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerHTML = ''
        box.style.pointerEvents = 'auto'
    })

})
const black = () => {
    
main.classList.add('close');
header.classList.add('renew');
headerh1.innerText = `Congratulation, ${pos1val} is winner`;

}

bts.addEventListener('click' , () =>{
    console.log('clicked');
    main.classList.remove('close');
    header.style.display = 'none';
    boxes.forEach((box) => {
        box.innerHTML = ''
        box.style.pointerEvents = 'auto'
    })
   
})