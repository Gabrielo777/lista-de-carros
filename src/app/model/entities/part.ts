export class Part {
    private _id!: string;
    private _nome! : string;
    private _ano! : number;
    private _montadora! : string;
    private _tipocarro! : number;
    private _tracao! : number;
    private _downloadURL!: any;
    private _uid!: string;

    constructor(nome : string, ano : number, montadora : string){
        this._nome = nome;
        this._ano = ano;
        this._montadora= montadora;
    }


    public get nome() : string {
        return this._nome;
    }
    public set nome(nome: string){
        this._nome = nome;
    }


    public get ano() : number {
        return this._ano;
    }
    public set ano(ano: number){
        this._ano = ano;
    }


    public get montadora() : string {
        return this._montadora;
    }
    public set montadora(montadora: string){
        this._montadora = montadora;
    }
    

    public get tipocarro() : number {
        return this._tipocarro;
    }
    public set tipocarro(tipocarro: number){
        this._tipocarro = tipocarro;
    }

    
    public get tracao() : number {
        return this._tracao;
    }
    public set tracao(tracao: number){
        this._tracao = tracao;
    }


    public get downloadURL() : any {
        return this._downloadURL;
    }
      
    public set downloadURL(value : any){
        this._downloadURL = value;
    }

    public get id(): string {
        return this._id;
      }
      public set id(value: string) {
        this._id = value;
      }
    
      public get uid(): string {
        return this._uid;
    }
    public set uid(value: string) {
        this._uid = value;
    } 
}  



