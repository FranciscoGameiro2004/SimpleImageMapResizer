let previousSize = 0
addEventListener('DOMContentLoaded',()=>{
    previousSize = document.querySelector('.img').naturalHeight

    resizeMap()

    addEventListener('resize', ()=>{
        resizeMap()
    })
})

function resizeMap(){
    let naturalSize = previousSize
    let size = document.querySelector('.img').height
    const multiplier = size/naturalSize
    console.log(multiplier);

    const map = document.querySelectorAll('.map > area')

    map.forEach(area => {
        let coords = area.getAttribute('coords').split(',')
        coords.forEach((number, index) => {
            coords[index] = (number*multiplier)
        });
        area.setAttribute('coords', coords.join(','))
        console.log(area)
    });

    console.log('lol');
    previousSize = size
}