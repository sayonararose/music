let draggedElement = null;
let originalElement = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll('.album').forEach(album => {
  addDragHandlers(album);
});

document.addEventListener('mousemove', (e) => {
  if (draggedElement) {
    moveAt(e.pageX, e.pageY);
  }
});

document.addEventListener('mouseup', (e) => {
  if (draggedElement) {
    const dropzones = document.querySelectorAll('.dropzone');
    let dropped = false;

    dropzones.forEach(zone => {
      const rect = zone.getBoundingClientRect();
      if (
        e.clientX > rect.left &&
        e.clientX < rect.right &&
        e.clientY > rect.top &&
        e.clientY < rect.bottom
      ) {
        const existing = zone.querySelector('.album');
        if (!existing) {
          zone.innerHTML = '';
          zone.appendChild(draggedElement);
          originalElement.remove(); 
        } else {
          draggedElement.remove(); 
        }

        draggedElement.style.position = 'static';
        draggedElement.style.zIndex = '';
        draggedElement.style.pointerEvents = 'auto';
        dropped = true;
      }
    });

    if (!dropped) {
      draggedElement.remove();
    }

    draggedElement = null;
    originalElement = null;
  }
});


function moveAt(pageX, pageY) {
  draggedElement.style.left = pageX - offsetX + 'px';
  draggedElement.style.top = pageY - offsetY + 'px';
}

function addDragHandlers(album) {
  album.addEventListener('mousedown', (e) => {
    originalElement = album;
    draggedElement = album.cloneNode(true);
    draggedElement.classList.add('album'); 
    draggedElement.style.position = 'absolute';
    draggedElement.style.zIndex = 1000;
    draggedElement.style.pointerEvents = 'none';
    document.body.appendChild(draggedElement);

    const rect = album.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    moveAt(e.pageX, e.pageY);
  });
}
