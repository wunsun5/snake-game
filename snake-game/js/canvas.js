const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

document.body.append(canvas);

export {canvas, ctx};