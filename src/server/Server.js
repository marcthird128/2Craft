/* 2Craft server entry point
 * Contains code to initialize a game server */

import { FileManager } from './FileManager.js';
import { Game } from '../game/Game.js'

class Server {
    constructor() {
        this.fileManager = new FileManager(this);
        this.game = new Game(this);
    }
}

export { Server };