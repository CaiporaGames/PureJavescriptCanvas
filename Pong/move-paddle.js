export class MovePaddle
{
    paddleY = 50;
    paddleX = 50;

    constructor()
    {
        document.addEventListener('keydown', this.handleClick.bind(this));
    }

    handleClick(event) 
    {
        if(event.key == 'w')
        {
            this.movePadVertically(-1);
        }
        else if(event.key == 's')
        {
            this.movePadVertically(1);
        }
        if(event.key == 'a')
        {
            this.movePadHorizontally(-1);
        }
        else if(event.key == 'd')
        {
            this.movePadHorizontally(1);
        }
    }

    movePadVertically(direction)
    {
        this.paddleY = this.paddleY + 10 * direction;
        return this.paddleY;
    }

    movePadHorizontally(direction)
    {
        this.paddleX = this.paddleX + 10 * direction;
        return this.paddleX;
    }
}

