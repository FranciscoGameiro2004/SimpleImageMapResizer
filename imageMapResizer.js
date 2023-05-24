let previousSize = []

addEventListener('DOMContentLoaded',()=>{
    previousSize = []
    document.querySelectorAll('.img-map').forEach(image => {
        previousSize.push(image.naturalHeight)
    });

    resizeMap()

    addEventListener('resize', ()=>{
        resizeMap()
    })
})

function resizeMap(){
    let multiplier = []
    let naturalSize = []
    let size = []

    previousSize.forEach((prev, index) => {
        naturalSize.push(prev)
        size.push(document.querySelectorAll('.img-map')[index].height)
    });

    previousSize.forEach((element, index) => {
        multiplier.push(size[index]/naturalSize[index])
    })

    const map = document.querySelectorAll('.map')
    console.log(map.length)
    map.forEach((nodes, mapIndex) => {
        nodes.childNodes.forEach(node => {
            if (node.tagName === 'AREA') {
                let coords = node.getAttribute('coords').split(',')
                coords.forEach((number, coordsIndex) => {
                    coords[coordsIndex] = (number*multiplier[mapIndex])
                });
                node.setAttribute('coords', coords.join(','))
            }
            
        });
    });

    for (i=0;i<=previousSize.length - 1; i++)[
        previousSize[i] = size[i]
    ]
}