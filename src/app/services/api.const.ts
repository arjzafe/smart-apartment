import { environment } from "src/environments/environment";

export class ApiConst {
  public static readonly BASE_API = environment.apiUrl;
  public static readonly APARTMENT_LIST_ITEMS = `${this.BASE_API}/List/json/listItems.aspx?listID=7892472&token=AD6110320424834934DE62FD2935A49264B6D947&receipt=undefined`;
}