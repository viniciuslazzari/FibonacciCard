const MAX_ROTATION = 15
const PERSPECTIVE = 1000
const SCALE = 1.1

init = () => {
    onMouseMove = (e) => {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerWidth = card.offsetLeft + cardWidth / 2;
        const centerHeight = card.offsetTop + cardHeight / 2;

        const mouseWidth = e.clientX - centerWidth;
        const mouseHeight = e.clientY - centerHeight;

        const rotateWidth = MAX_ROTATION * mouseHeight / (cardHeight / 2);
        const rotateHeight = -MAX_ROTATION * mouseWidth / (cardWidth / 2);

        card.style.transform = `
            perspective(${PERSPECTIVE}px)
            rotateX(${rotateWidth}deg) 
            rotateY(${rotateHeight}deg)
            scale3d(${SCALE}, ${SCALE}, ${SCALE})
        `;
    }

    onMouseLeave = () => {
        card.style.transform = `
            rotateX(0deg) 
            rotateY(0deg)
            scale3d(1, 1, 1)
        `;
    }

    const card = document.getElementById("fibonacciCard");
    
    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);
}

window.onload = init;