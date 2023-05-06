
export class DrawUtils
{
    constructor(context)
    {
        this.context = context;
    }

    drawRectangle(x, y, width, height, color = 'red') 
    {   
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }

    drawCircle(x, y, radius, color = 'red') 
    {   
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.fill();
    }

    clearRect()
    {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}

