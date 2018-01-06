class Floor {
    constructor({floorElement, roomElementClass, roomNameElementClass}) {
        this.floor = floorElement;
        this.rooms = this.floor.querySelectorAll(`.${roomElementClass}`);
        this.roomNameElementClass = `.${roomNameElementClass}`;
        this.roomClassFixed = `${roomNameElementClass}_fixed`;
    }

    showNamesRooms() {
        this.rooms.forEach((room) => {
            room.classList.add(this.roomClassFixed);
        });
    }

    hideNamesRooms() {
        this.rooms.forEach((room) => {
            room.classList.remove(this.roomClassFixed);
        });
    }

    scrollWindow() {
        this.rooms.forEach((room) => {
            let coordinateTopRow = Math.round(room.getBoundingClientRect().top);
            room.querySelector(this.roomNameElementClass).style.top = `${coordinateTopRow + 10}px`;
        });
    }
}

export {Floor};
