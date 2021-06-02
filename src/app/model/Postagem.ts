import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem{
  public id: number;
  public titulo: string;
  public descricao: string;
  public midia: string;
  public valor_doado: number;
  public meta: number;
  public data: Date;
  public tema: Tema;
  public usuario: User;
}
