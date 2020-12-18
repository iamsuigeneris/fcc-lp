// Navbar
function classToggle(){
    const items = document.querySelectorAll('.nav-link')
    const lists = document.querySelectorAll('ul li')
    // const home = document.getElementById('header')

    items.forEach( item => item.classList.toggle('show'))
    lists.forEach( list => list.classList.toggle('hide'))
 
    // gallery.classList.toggle('hide')

}
const btn = document.querySelector('.btn')
const gallery = document.getElementById('gallery')

btn.addEventListener('click',classToggle)
gallery.addEventListener('click',classToggle)

//  LightBox
        const lightbox = document.createElement('div')
        lightbox.id = 'lightbox'
        document.body.appendChild(lightbox)

        const images = document.querySelectorAll('.images')
        images.forEach( image => {
            image.addEventListener('click', e => {
                lightbox.classList.add('active')
                const img = document.createElement('img')
                img.src = image.src
                while(lightbox.firstChild){
                    lightbox.removeChild(lightbox.firstChild)
                }
                lightbox.appendChild(img)
            })
        })
        lightbox.addEventListener('click', e => {
            if(e.target !== e.currentTarget)  return
            lightbox.classList.remove('active')
        })

// Video
        const video = document.querySelector('.video')
        const juice = document.querySelector('.orange-juice')
        const videoBtn = document.getElementById('play-pause')

        function togglePlayPause(){
            if(video.paused){
                videoBtn.className = "pause"
                video.play()
            }
            else{
                videoBtn.className = "play"
                video.pause()
            }
        }

        videoBtn.onclick = function(){
            togglePlayPause()
        }

        video.addEventListener('timeupdate', function(){
            let juicePos = video.currentTime / video.duration
            juice.style.width = juicePos * 100 + "%"
            if(video.ended){
                videoBtn.className = "play"
            }
        })