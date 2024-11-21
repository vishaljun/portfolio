/*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menu-animation')
const $items = document.querySelectorAll('.menu--item')
const $images = document.querySelectorAll('.menu--item img')
let menuWidth = $menu.clientWidth
let itemWidth = $items[0].clientWidth
let wrapWidth = $items.length * itemWidth

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0

/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
  return v0 * ( 1 - t ) + v1 * t
}

/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
  gsap.set($items, {
    x: (i) => {
      return i * itemWidth + scroll
    },
    modifiers: {
      x: (x, target) => {
        const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x))
        return `${s}px`
      }
    }
  })
} 
dispose(0)

/*--------------------
Grabber (Draggable)
--------------------*/
let touchStart = 0
let touchX = 0
let isDragging = false

const handleGrabberStart = (e) => {
  touchStart = e.clientX || e.touches[0].clientX
  isDragging = true
  $menu.classList.add('is-dragging')
}

const handleGrabberMove = (e) => {
  if (!isDragging) return
  touchX = e.clientX || e.touches[0].clientX
  scrollY += (touchX - touchStart) * 2.5 // Drag effect strength
  touchStart = touchX
}

const handleGrabberEnd = () => {
  isDragging = false
  $menu.classList.remove('is-dragging')
}

/*--------------------
Autoplay
--------------------*/
let autoplaySpeed = 1; // Adjust this for autoplay speed
let isAutoplayActive = true; // Track if autoplay is active

const autoplay = () => {
  if (isAutoplayActive) {
    scrollY += autoplaySpeed; // Automatically scroll
  }
}

/*--------------------
Listeners
--------------------*/
$menu.addEventListener('touchstart', handleGrabberStart)
$menu.addEventListener('touchmove', handleGrabberMove)
$menu.addEventListener('touchend', handleGrabberEnd)

$menu.addEventListener('mousedown', handleGrabberStart)
$menu.addEventListener('mousemove', handleGrabberMove)
$menu.addEventListener('mouseleave', handleGrabberEnd)
$menu.addEventListener('mouseup', handleGrabberEnd)

$menu.addEventListener('selectstart', () => { return false })

/*--------------------
Mouseenter and Mouseleave to control autoplay
--------------------*/
$menu.addEventListener('mouseenter', () => {
  isAutoplayActive = false; // Stop autoplay when mouse enters
})

$menu.addEventListener('mouseleave', () => {
  isAutoplayActive = true; // Resume autoplay when mouse leaves
})

/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
  menuWidth = $menu.clientWidth
  itemWidth = $items[0].clientWidth
  wrapWidth = $items.length * itemWidth
})

/*--------------------
Render
--------------------*/
const render = () => {
  requestAnimationFrame(render)
  autoplay(); // Call autoplay function to scroll automatically
  y = lerp(y, scrollY, .1) // Smooth transition of scroll
  dispose(y) // Apply new scroll position to items
  
  scrollSpeed = y - oldScrollY
  oldScrollY = y
  
  gsap.to($items, {
    skewX: -scrollSpeed * .2,
    rotate: scrollSpeed * .01,
    scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003
  })
}
render()
