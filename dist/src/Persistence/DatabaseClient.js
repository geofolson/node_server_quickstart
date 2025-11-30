import { PrismaClient } from '@prisma/client';
export default class DatabaseClient {
    static _instance;
    _prisma;
    constructor(){
        this._prisma = new PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
            log: [
                'query',
                'info',
                'warn',
                'error'
            ]
        });
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    get prisma() {
        return this._prisma;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9QZXJzaXN0ZW5jZS9EYXRhYmFzZUNsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFiYXNlQ2xpZW50IHtcbiAgc3RhdGljIF9pbnN0YW5jZTogRGF0YWJhc2VDbGllbnQ7XG4gIHByaXZhdGUgX3ByaXNtYTogUHJpc21hQ2xpZW50O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XG4gICAgICBkYXRhc291cmNlVXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgICBsb2c6IFsncXVlcnknLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ10sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBEYXRhYmFzZUNsaWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICB9XG4gIHB1YmxpYyBnZXQgcHJpc21hKCk6IFByaXNtYUNsaWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXNtYTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsIkRhdGFiYXNlQ2xpZW50IiwiX2luc3RhbmNlIiwiX3ByaXNtYSIsImRhdGFzb3VyY2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwibG9nIiwiaW5zdGFuY2UiLCJwcmlzbWEiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFlBQVksUUFBUSxpQkFBaUI7QUFFOUMsZUFBZSxNQUFNQztJQUNuQixPQUFPQyxVQUEwQjtJQUN6QkMsUUFBc0I7SUFFOUIsYUFBc0I7UUFDcEIsSUFBSSxDQUFDQSxPQUFPLEdBQUcsSUFBSUgsYUFBYTtZQUM5QkksZUFBZUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO1lBQ3ZDQyxLQUFLO2dCQUFDO2dCQUFTO2dCQUFRO2dCQUFRO2FBQVE7UUFDekM7SUFDRjtJQUVBLFdBQWtCQyxXQUEyQjtRQUMzQyxPQUFPLElBQUksQ0FBQ1AsU0FBUyxJQUFLLENBQUEsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUM7SUFDdEQ7SUFDQSxJQUFXUSxTQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQ1AsT0FBTztJQUNyQjtBQUNGIn0=