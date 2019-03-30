export class Log {
    constructor(
        public id?: number, 
        public dia?: string,
        public hora?: string,
        public contexto?: string,
        public tipo?: number,
        public mensagem?: string,
    ) {}
}