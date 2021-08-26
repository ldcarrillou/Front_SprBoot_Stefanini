import { ParentEntity } from "./parentEntity.model";
export class PersonaModel extends ParentEntity {
  public nombre: string;
	public apellido: string;
	public fecha_nacimiento: string;
	public username: string;
	public password: string;
	public identificacion: number;
	public codigo_tipo_identificacion: number;
	public codigo_estado: number;

}
