import { Postagem } from "./Postagem";

export class User{
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public postagens: Postagem[];
  public foto: string;
  public tipo: string;
}
