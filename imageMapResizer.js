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
    let useMap = []

    previousSize.forEach((prev, index) => {
        naturalSize.push(prev)
        size.push(document.querySelectorAll('.img-map')[index].height)
        useMap.push(document.querySelectorAll('.img-map')[index].getAttribute('usemap').substr(1,document.querySelectorAll('.img-map')[index].getAttribute('usemap').length-1))
    });

    previousSize.forEach((element, index) => {
        multiplier.push(size[index]/naturalSize[index])
    })

    const map = document.querySelectorAll('.map')
    useMap.forEach((name, mapIndex) => {
        document.getElementsByName(name)[0].childNodes.forEach(node => {
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