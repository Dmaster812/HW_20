(() => {

    const imgDB = [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg'
    ];

    const imgList = document.getElementById('imgList');
    const imgContent = document.getElementById('imgContent');
    const alertContent = document.getElementById('alertContent');
    const alertZone = document.getElementById('alertZone');

    const render = () => {

        imgList.innerHTML = imgDB.map((value, index) => {
            console.log(value);
            return `<img src="${value}">`

        }).join('');

        imgList.addEventListener('click', e => {
            const source = e.target.getAttribute('src');

            if (source){
                imgContent.setAttribute('src', source);
                alertContent.classList.remove('hide');
                alertZone.classList.remove('hide');
            }
        })

        alertZone.addEventListener('click', () => {
            alertContent.classList.add('hide');
            alertZone.classList.add('hide');
        })
    }

    render();

})();